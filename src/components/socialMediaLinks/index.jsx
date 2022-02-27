import "./index.css";
import { Icon } from "../Icon/Icon";

const SocialMediaLinks = () => {
  return (
    <div className="social-media__container">
      <a target="_blank" href="">
        <Icon name="twitter" className="social-icon" />
      </a>
      <a target="_blank" href="">
        <Icon name="github" className="social-icon" />
      </a>
      <a target="_blank" href="">
        <Icon name="linkedin" className="social-icon" />
      </a>
      <a target="_blank" href="">
        <Icon name="github" className="social-icon" />
      </a>
      <a target="_blank" href="">
        <Icon name="linkedin" className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
