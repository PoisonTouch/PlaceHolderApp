import "./UserCard.css";
import MailIcon from "../assets/mailicon.svg";
import PhoneIcon from "../assets/phoneicon.svg";
const UserCard = (props) => {
  return (
    <div className="usercard">
      <div class="card-photo">
        <div class="logouser">{props.logo}</div>
      </div>
      <div className="text">
        <div className="name-text">
          <b>{props.name}</b>
        </div>
        <div className="mail">
          <img class="mail-icon" src={MailIcon} alt="mail" />
          <div className="mail-text">
            <i>{props.mail}</i>
          </div>
        </div>
        <div className="phone">
          <img class="phone-icon" src={PhoneIcon} alt="phone" />
          <div className="phone-text">{props.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
