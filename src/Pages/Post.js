import Header from "../Components/Header";
import FullPostCard from "../Components/FullPostCard";
import { Route, BrowserRouter } from "react-router-dom";
function Post(props) {
  return (
    <BrowserRouter path={props.postid}>
      <div>
        <Header title="Placeholder-Post"></Header>
        <FullPostCard
          title={props.title}
          name={props.name}
          text={props.text}
        ></FullPostCard>
      </div>
    </BrowserRouter>
  );
}

export default Post;
