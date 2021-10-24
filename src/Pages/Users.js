import Header from "../Components/Header";
import UserCard from "../Components/UserCard.js";
import "./Page.css";
import LoadUsers from "../Components/LoadUsers.js";

function Users() {
  return (
    <div>
      <Header title="Placeholder-Users"></Header>
      <div className="posts-container">
        <LoadUsers></LoadUsers>
      </div>
    </div>
  );
}

export default Users;
