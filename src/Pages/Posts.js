import Header from "../Components/Header";
import PostCard from "../Components/PostCard.js";
import "./Page.css";
import LoadPosts from "../Components/LoadPosts.js";
function Posts() {
  return (
    <body>
      <Header title="Placeholder-Posts"></Header>
      <div className="posts-container">
        <LoadPosts></LoadPosts>
        
      </div>
    </body>
  );
}

export default Posts;
