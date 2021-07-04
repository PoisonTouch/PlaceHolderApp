import './PostCard.css';

const PostCard = props => {

    return (
        <div className="card">
            <div className='title-post'>{props.title}</div>
            <div className='name-user'>{props.name}</div>
            <div className='text-post'>{props.text}</div>
            <a className='full-post'>hhh</a>
        </div>
        )
    }
    
export default PostCard