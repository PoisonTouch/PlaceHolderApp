import "./PostCard.css";

const PostCard = (props) => {
  return (
    <div className="card">
      <div className="title-post">
        <b>{props.title}</b>
      </div>
      <div className="name-user">{props.name}</div>
      <div className="text-post">{props.text}</div>
      <a className="full-post" href={props.fullpostref}>
        ᐳ
      </a>
    </div>
  );
};

export default PostCard;
