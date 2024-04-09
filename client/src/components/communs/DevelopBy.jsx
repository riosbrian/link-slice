import { LinkedinIcon } from "../icons/LinkedinIcon";

export function DevelopBy() {
  return (
    <div className="developBy">
      <p>
        <span>Develop by </span>
        <a
          className="anchor"
          href="https://www.linkedin.com/in/brian-rios-5823a2214/"
          target="_blank"
        >
          Brian Rios
          <span className="developBy__icon">
            <LinkedinIcon />
          </span>
        </a>
      </p>
    </div>
  );
}
