import styles from "./circular-text.module.scss";

export default function CircularText({ text = "Sample" }: { text: string }) {
  return (
    <div className={styles["circular-text"]}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          id="circlePath"
          d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
        />
        <text>
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
    </div>
  );
}
