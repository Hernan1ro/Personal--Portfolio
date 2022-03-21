import "./index.css";
import { Icon } from "./Icon/Icon";

const SocialMediaLinks = () => {
  return (
    <div className="social-media__container">
      <a target="_blank" href="https://twitter.com/Hernan1ro">
        <Icon name="twitter" className="social-icon" />
      </a>
      <a target="_blank" href="https://github.com/Hernan1ro">
        <Icon name="github" className="social-icon" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/hernan1ro/">
        <Icon name="linkedin" className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
