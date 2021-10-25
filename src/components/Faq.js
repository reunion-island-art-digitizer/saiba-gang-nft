import Container from "./Container";
import styles from "styles/FAQ.module.scss";
const items = document.querySelectorAll('.accordion button');

function FAQ() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }


    items.forEach((item) => item.addEventListener('click', FAQ));

    return (
        <Container>
            <div className={styles["accordion"]}>
                <div className={styles["accordion-item"]}>
                    <button id={styles["accordion-button-1"]} aria-expanded="false">
                        <span className={styles["accordion-title"]}>Why is the moon sometimes out during the day?</span>
                        <span className={styles["icon"]} aria-hidden="true"></span>
                    </button>
                    <div className={styles["accordion-content"]}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                            Ut tortor pretium viverra suspendisse potenti.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FAQ;