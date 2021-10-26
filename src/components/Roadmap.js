import styles from "styles/Roadmap.module.scss";
import classNames from "classnames";
import { Checkmark, Circle } from "./Icons";

const RoadmapStep = ({ status, title, description }) => {
    <link rel="stylesheet" href="messtyles.css" type="text/css" media="all" />
  return (
    <div className={classes}>
      {status === "complete" && (
        <Checkmark className={styles["roadmap-step-icon"]} />
      )}
      {status === "active" && (
        <Circle className={styles["roadmap-step-icon"]} />
      )}
      <p className={styles["roadmap-step-title"]}>{title}</p>
      <p className={styles["roadmap-step-description"]}>{description}</p>
    </div>
  );
};

export default function Roadmap() {
  return (
      <div class="container">
          <h1>Simple Accordions | WebDevTrick.com</h1>

          <button class="accordion">First Accordion</button>
          <div class="accordion-content">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?
              </p>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?
              </p>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?
              </p>
          </div>


          <button class="accordion">Second Accordion</button>
          <div class="accordion-content">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?
              </p>
          </div>


          <button class="accordion">Third Accordion</button>
          <div class="accordion-content">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi, sapiente, nostrum?
              </p>
          </div>
      </div>
  );
}
