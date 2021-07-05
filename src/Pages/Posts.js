import Header from '../Components/Header';
import PostCard from '../Components/PostCard.js';
import './Page.css';
function Posts() {
    return (
        <body>
          <Header title='Placeholder-Posts'></Header>
          <PostCard title='Modern Frontend Applications' 
          name='James Lee' text='Web Development is an ever-changing field — the way we build websites today is completely different from how we used to do it a couple of years ago. ' fullpostref='>'>

          </PostCard>
        </body>
        )
    
    }
    
    
export default Posts