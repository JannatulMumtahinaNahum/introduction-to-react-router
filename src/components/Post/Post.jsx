import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id , title } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '20px',
        margin: '20px'

    }
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
            <button><Link to={`/post/${id}`}>Post Details</Link></button><br />
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;