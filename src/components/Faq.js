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
                        Quand est-ce que RIA Geck se lance ?
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
                        Comment et cobien puis-je en acheter ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Le jour du lancement, le lien sera transmis sur Discord et Twitter.
                        Ensuite, il vous suffit de cliquer sur mint, de connecter votre portefeuille phantom
                        (veuillez utiliser un ordinateur de bureau/ordinateur portable pour le faire.), puis vous pouvez continuer.
                        Il y a une limite de 10 RIA Geck que vous pouvez acheter par transaction.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Y aura-t-il une r�v�lation instantan�e ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    La rv�lation sera instantan�e.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Quelle est l'association dont j'entends toujours parler ?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    La future association d'artistes ouvrira ses portes � La R�union afin de promouvoir les diff�rentes formes d'art de l'�le dans le monde entier.
                    Elle permettra �galement d'accompagner les artistes dans l'univers du Web 3.0.
                </p>
            </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Pourra-t-on revendre la Ria Geck sur les march�s secondaires ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Les march�s secondaires pourront �tre utilis�s ainsi que notre futur march� d�di� aux artistes r�unionnais et aux d�tenteurs de RIA Geck.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}