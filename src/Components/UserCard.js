import './UserCard.css';
import Avatar from './Ellipse.svg'
import MailIcon from './mailicon.svg'
import PhoneIcon from './phoneicon.svg'
const UserCard = props => {

    return (
        <div className="usercard">
            <img class="card-photo" src={Avatar} alt="avatar" />
            <div className="text">
                <div className="name-text"><b>{props.name}</b></div>
                <div className="mail">
                    <img class="mail-icon" src={MailIcon} alt="mail" />
                    <div className="mail-text"><i>{props.mail}</i></div>
                </div>
                <div className="phone">
                    <img class="phone-icon" src={PhoneIcon} alt="phone" />
                    <div className="phone-text">{props.phone}</div>
                </div>
            </div>
        </div>
        )
    }
    
export default UserCard