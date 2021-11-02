import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";


export default function Faq() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        When does RIA Geck launch ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        27th Nov 9:00pm UTC
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        How can I buy and how many can I mint ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        On launch day, the link will be transmitted on discord and twitter.
                        Then, you simply click mint, connect your phantom wallet (please use a desktop / laptop when doing so), and then you can go ahead.
                        There is a limit of 10 RIA Geck you can mint in any one transaction.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Will there be instant reveal ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Reveal will be instant.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    What is the association that I keep hearing about ?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    The future artists' association will open its doors on Reunion Island in order to promote the different art forms of the island to the whole world.
                </p>
            </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Will we be able to resell the Ria Geck on secondary markets ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The secondary markets can be used as well as our future market dedicated to artists from Reunion Island as well as to RIA Geck holders.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}