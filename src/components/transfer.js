var web3 = require("@solana/web3.js");

(async () => {

    // Connect to cluster
    var connection = new web3.Connection(web3.clusterApiUrl("devnet"));

    // Construct a `Keypair` from secret key
    var from = web3.Keypair.generate();
    await connection.requestAirdrop(from.publicKey, 1000000000);

    // Generate a new random public key
    var to = web3.Keypair.generate();
    await connection.requestAirdrop(to.publicKey, 1000000000);

    //waiting 1000 miliseconds to make the the airdrop transactions are complete
    setTimeout(async function () {

        // Add transfer instruction to transaction
        var transaction = new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to.publicKey,
                lamports: web3.LAMPORTS_PER_SOL / 100,
            })
        );

        // Sign transaction, broadcast, and confirm
        var signature = await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from],
            { commitment: 'confirmed' }
        );
        console.log("SIGNATURE", signature);
        console.log("SUCCESS");

    }, 1000);

})();