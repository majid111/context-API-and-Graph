import { useEffect, useState } from "react";

const Comments = () => {
    const [comment , setComment]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    return (
        <div>
            <h2>Comments: {comment.length}</h2>            
        </div>
    );
};

export default Comments;