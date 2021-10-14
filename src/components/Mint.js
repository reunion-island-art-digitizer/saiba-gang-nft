import React, { useState, useEffect } from 'react';
import { Connection, PublicKey, Keypair, LAMPORTS_PER_SOL, SystemProgram, TransactionInstruction, SYSVAR_RENT_PUBKEY, Transaction } from '@solana/web3.js';
import { ASSOCIATED_TOKEN_PROGRAM_ID, MintLayout, AccountLayout, Token, TOKEN_PROGRAM_ID, u64 } from '@solana/spl-token';
import bs58 from 'bs58';
import { Buffer } from 'buffer';
import * as BufferLayout from 'buffer-layout';

// Need to deploy the contract and figure out how to create the account for data storage
const VOTING_CONTRACT_PROGRAMID = "";
const VOTING_CONTRACT_ACCOUNT = "";
const seed = "something";


function Mint() {

    const [walletBalance, setWalletBalance] = useState(null);
    const [address, setAddress] = useState(null);
    const [mintAddress, setMintAddress] = useState(null);
    const [tokenAccount, setTokenAccount] = useState(null);

    const [numberOfTokens, setNumberOfTokens] = useState(0);

    const createTokens = async () => {

        let connection = getConnection();

        // create new Account
        const mintAccount = new Keypair();

        try {

            const createAccIx = SystemProgram.createAccount({
                fromPubkey: getPublicKey(),
                newAccountPubkey: mintAccount.publicKey,
                lamports: LAMPORTS_PER_SOL,
                space: MintLayout.span,
                programId: TOKEN_PROGRAM_ID,
            })
            console.log(createAccIx)


            // create mint init instruction
            const createMintIx = Token.createInitMintInstruction(
                TOKEN_PROGRAM_ID,
                mintAccount.publicKey,
                1,
                getPublicKey(),
                getPublicKey() ? getPublicKey() : null
            )
            console.log(createMintIx)

            // Construct the transaction
            let tx = new Transaction().add(createAccIx, createMintIx);

            // Signature of the fee payer
            tx.feePayer = getPublicKey();


            tx.recentBlockhash = (await getRecentBlockhash()).blockhash;

            console.log("Signatures done after this")

            tx.sign(mintAccount);

            const signedTransaction = await window.solana.request({
                method: "signTransaction",
                params: {
                    message: bs58.encode(tx.serializeMessage()),
                },
            });
            // const signedTransaction = await window.solana.signTransaction(tx.serializeMessage());
            console.log(signedTransaction);

            const signature = bs58.decode(signedTransaction.signature);
            const publicKey = new PublicKey(signedTransaction.publicKey);
            tx.addSignature(publicKey, signature);

            console.log(tx);
            setMintAddress(mintAccount.publicKey.toBase58())

            console.log(tx);

            let si = await connection.sendRawTransaction(tx.serialize());
            const hash = await connection.confirmTransaction(si);

            console.log(hash);

        } catch (e) {
            setMintAddress(null);
            alert(e.message);
            console.log(e, e.message);
        }
    }

    const getRecentBlockhash = async () => {
        let connection = getConnection();
        let blockhash = await connection.getRecentBlockhash("max");
        return blockhash;
    }

    const getConnection = () => {
        let connection = new Connection("https://api.devnet.solana.com", "confirmed");
        return connection;
    }

    const getPublicKey = () => {
        // Okay so I had my localnet offline and thus it was failing. Nothing to do with
        // Publickey or Keypair
        let userAddress = new PublicKey(window.solana.publicKey.toString());
        return userAddress;
    }

    const handleRequestAirdrop = async () => {
        // handle error case later -> Also one behind. Maybe react thing?
        let connection = getConnection();
        await connection.requestAirdrop(getPublicKey(), LAMPORTS_PER_SOL * 0.1)
        getBalance();
    }

    const getBalance = async () => {
        let connection = getConnection();
        const res = await connection.getBalance(getPublicKey());
        // console.log(res);
        setWalletBalance(res);
    }

    // Just create the address of PDA here but init the account when you vote.
    const getDerivedAccountAddress = async () => {
        let checkAccountPubkey = await PublicKey.createWithSeed(getPublicKey(), seed, VOTING_CONTRACT_PROGRAMID);
        return checkAccountPubkey;
    }

    const connectToWallet = async () => {
        await window.solana.connect()
    }


    const handleConnectWallet = async () => {
        // Check if phantom is installed or not and prompt to install it.
        if (window.solana && window.solana.isPhantom) {
            await connectToWallet();

            // update address and balance of the wallet
            setAddress(window.solana.publicKey.toString());
            getBalance();
            // getDerivedAccountAddress();
            // console.log(getConnection())
        } else {
            alert("Phantom wallet is not installed. Please install.");
            window.open("https://phantom.app/", "_target");
        }
    }

    const createAssociatedTokenAccount = async () => {
        let ownerAccount = getPublicKey();
        let mintAccount = new PublicKey(`${mintAddress}`);

        let associatedAccountAddress = (await PublicKey.createProgramAddress(
            [ownerAccount.toBuffer(), mintAccount.toBuffer(), TOKEN_PROGRAM_ID.toBuffer()],
            ASSOCIATED_TOKEN_PROGRAM_ID
        ));

        console.log(associatedAccountAddress.toBase58())

        let ix = new TransactionInstruction({
            programId: ASSOCIATED_TOKEN_PROGRAM_ID,
            data: Buffer.from([]),
            keys: [
                { pubkey: ownerAccount, isSigner: true, isWritable: true },
                { pubkey: associatedAccountAddress, isSigner: false, isWritable: true },
                { pubkey: ownerAccount, isSigner: false, isWritable: false },
                { pubkey: mintAccount, isSigner: false, isWritable: false },
                { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
                { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
                { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
            ]
        });

        let tx = new Transaction().add(ix);

        tx.feePayer = getPublicKey();

        tx.recentBlockhash = (await getRecentBlockhash()).blockhash;

        const signedTransaction = await window.solana.request({
            method: "signTransaction",
            params: {
                message: bs58.encode(tx.serializeMessage()),
            },
        });
        // console.log(signedTransaction);

        const signature = bs58.decode(signedTransaction.signature);
        const publicKey = new PublicKey(signedTransaction.publicKey);
        tx.addSignature(publicKey, signature);

        let connection = getConnection();
        console.log(tx);

        let si = await connection.sendRawTransaction(tx.serialize());
        const hash = await connection.confirmTransaction(si);

        console.log(hash);

        setTokenAccount(associatedAccountAddress.toBase58());

    }

    const createTokenAccount = async () => {
        const tokenMintPubkey = new PublicKey(`${mintAddress}`);
        const ownerPubkey = getPublicKey();


        const connection = getConnection();

        const balanceNeeded = await Token.getMinBalanceRentForExemptAccount(
            connection
        );

        const newAccount = new Keypair();

        const createAccIx = SystemProgram.createAccount({
            fromPubkey: ownerPubkey,
            newAccountPubkey: newAccount.publicKey,
            lamports: balanceNeeded,
            space: AccountLayout.span,
            programId: TOKEN_PROGRAM_ID
        });

        const createTokenAccountIx = Token.createInitAccountInstruction(
            TOKEN_PROGRAM_ID,
            tokenMintPubkey,
            newAccount.publicKey,
            ownerPubkey
        );

        let tx = new Transaction().add(createAccIx, createTokenAccountIx);

        tx.feePayer = ownerPubkey;

        tx.recentBlockhash = (await getRecentBlockhash()).blockhash;

        tx.sign(newAccount);

        const signedTransaction = await window.solana.request({
            method: "signTransaction",
            params: {
                message: bs58.encode(tx.serializeMessage()),
            },
        });
        // console.log(signedTransaction);

        const signature = bs58.decode(signedTransaction.signature);
        const publicKey = new PublicKey(signedTransaction.publicKey);
        tx.addSignature(publicKey, signature);

        let si = await connection.sendRawTransaction(tx.serialize());
        const hash = await connection.confirmTransaction(si);

        console.log(hash);

        setTokenAccount(newAccount.publicKey.toBase58());
    }

    const mintTokens = async () => {
        const destinationAcc = new PublicKey(`${tokenAccount}`);
        const tokenMintPubkey = new PublicKey(`${mintAddress}`)
        const connection = getConnection();
        const ownerPubkey = getPublicKey();
        let amount = new u64(numberOfTokens, 10);
        console.log(amount);
        // return;

        const mintIx = Token.createMintToInstruction(
            TOKEN_PROGRAM_ID,
            tokenMintPubkey,
            destinationAcc,
            ownerPubkey,
            [],
            amount
        );

        let tx = new Transaction().add(mintIx);

        tx.feePayer = ownerPubkey;

        tx.recentBlockhash = (await getRecentBlockhash()).blockhash;


        const signedTransaction = await window.solana.request({
            method: "signTransaction",
            params: {
                message: bs58.encode(tx.serializeMessage()),
            },
        });
        // console.log(signedTransaction);

        const signature = bs58.decode(signedTransaction.signature);
        const publicKey = new PublicKey(signedTransaction.publicKey);
        tx.addSignature(publicKey, signature);
        console.log(tx);

        let si = await connection.sendRawTransaction(tx.serialize());
        const hash = await connection.confirmTransaction(si);

        console.log(hash);
    }

    const createMultiSigAccount = async () => {
        // Create a local account in browser to sign with client account for 2:2 multisig

        let m = 2;
        let connection = getConnection();

        let secondAcount = new Keypair();
        console.log(secondAcount.publicKey.toBase58(), "is the public key of the other account co signing this.")
        console.log(secondAcount.secretKey.toString())

        let multisigAcc = new Keypair();
        console.log(multisigAcc.publicKey.toBase58(), "is the public key of the multisig account")

        const balanceNeeded = await Token.getMinBalanceRentForExemptMultisig(
            getConnection()
        );

        const transaction = new Transaction();
        transaction.add(
            SystemProgram.createAccount({
                fromPubkey: getPublicKey(),
                newAccountPubkey: multisigAcc.publicKey,
                lamports: balanceNeeded,
                space: MintLayout.span,
                programId: TOKEN_PROGRAM_ID,
            }),
        );

        // create the new account
        let keys = [
            { pubkey: multisigAcc.publicKey, isSigner: false, isWritable: true },
            { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
        ];

        keys.push({ pubkey: getPublicKey(), isSigner: false, isWritable: false });
        keys.push({ pubkey: secondAcount.publicKey, isSigner: false, isWritable: false });

        const dataLayout = BufferLayout.struct([
            BufferLayout.u8('instruction'),
            BufferLayout.u8('m'),
        ]);
        const data = Buffer.alloc(dataLayout.span);
        dataLayout.encode(
            {
                instruction: 2, // InitializeMultisig instruction
                m,
            },
            data,
        );
        transaction.add({
            keys,
            programId: TOKEN_PROGRAM_ID,
            data,
        });

        // Send the two instructions

        transaction.feePayer = getPublicKey();

        transaction.recentBlockhash = (await getRecentBlockhash()).blockhash;

        transaction.sign(multisigAcc);

        const signedTransaction = await window.solana.request({
            method: "signTransaction",
            params: {
                message: bs58.encode(transaction.serializeMessage()),
            },
        });
        // console.log(signedTransaction);

        const signature = bs58.decode(signedTransaction.signature);
        const publicKey = new PublicKey(signedTransaction.publicKey);
        transaction.addSignature(publicKey, signature);

        let si = await connection.sendRawTransaction(transaction.serialize());
        const hash = await connection.confirmTransaction(si);

        console.log(hash);

    }

    return (
        <div >
            {console.log("Render called")}
            <h2>Multisig Custom Tokens</h2>

            {!address && <p>Connect your wallet</p> && <button onClick={handleConnectWallet}>Connect Wallet</button>}
            {address && <p>{address} is the user address that is connected right now!</p>}
            {(walletBalance !== null) && <p>{walletBalance / LAMPORTS_PER_SOL} SOL is the amount of money this connected user has</p>}
            {address && <button onClick={handleRequestAirdrop}>Request Airdrop</button>}
            <br />

            <div>
                <p>Create Custom Tokens</p>
                <button onClick={createTokens.bind(this)}>Create token</button>
                <br />
                {mintAddress && <p>{mintAddress} is the token address</p>}
            </div>
            <br />

            <div>
                <p>Create Associated Token Account</p>
                {mintAddress && <p>{mintAddress} is taken as the Token ID</p>}
                <p>The wallet owner is taken as the owning authority of the token.</p>
                <p>Getting Associated Account does not work now.</p>
                <button onClick={createAssociatedTokenAccount.bind(this)}>Create Associated Token Account</button>
                <br />

                <button onClick={createTokenAccount.bind(this)}>Create Token Account</button>


                {tokenAccount && <p>{tokenAccount} is the token address</p>}
            </div>


            <div>
                <h2>Mint Tokens</h2>
                <p>Minting {mintAddress} </p>
                <p>tokens for {address} </p>
                <p>in this this account {tokenAccount}</p>
            </div>

            <label htmlFor="input">Enter the number of tokens you want to mint </label>
            <input type="number" id="input" value={numberOfTokens} onChange={e => { setNumberOfTokens(e.target.value) }} />
            <button onClick={mintTokens.bind(this)}>Mint Tokens</button>

            <div>
                <h2>Create Multisig Account</h2>
                <button onClick={createMultiSigAccount.bind(this)}>Create multisig Account</button>
            </div>
        </div>
    )
}

export default Mint