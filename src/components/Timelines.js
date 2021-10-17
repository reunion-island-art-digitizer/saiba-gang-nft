import React from "react";
import { Chrono } from "react-chrono";
import data from "./DataTimelines";

function Timelines() {
        
    return (
            <div style={{ width: "1000px", height: "350px" }}>
                <Chrono
                    items={data}
                    theme={{
                        primary: "Orange",
                        secondary: "Yellow",
                        cardBgColor: "#0000000",
                        cardForeColor: "white",
                        titleColor: "black",
                    }}
                    hideControls
                    allowDynamicUpdate
                    mode="HORIZONTAL"
                    slideShow
                >
                    <div>
                        <h3>Mint</h3>
                        <p>
                            9740 RIA Boys come alive and will be added to Rarity Tools
                        </p>
                    </div>
                    <div>
                        <h3>Giweavays Holders</h3>
                        <p>
                            5 random RIA Boys holders will receive 1 more NFT as a gift.
                        </p>
                    </div>
                    <div>
                        <h3>Association</h3>
                        <p>
                            Creation of the association for the promotion of Reunion Island Artists.
                        </p>
                    </div>
                    <div>
                        <h3>Giveaways</h3>
                        <p>
                            3 giveaways for twitter, discord, and holders in partnership with our artists.
                        </p>
                    </div>
                    <div>
                        <h3>Marketplace</h3>
                    <p>
                        Creation of marketplace for our Reunion Island Artists.
                        Birth of the RIA Girls project with Coin creation.
                    </p>
                    </div>
                    <div>
                        <h3>Life of project</h3>
                        <p>
                          Launch of the global RIAD project: Reunion Island Art Digitizer.
                        </p>
            </div>
            </Chrono >
            </div>
        )
}

export default Timelines;