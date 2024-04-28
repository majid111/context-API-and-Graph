import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const Posts = () => {
    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div>
            {
                navigation.state === "loading" ? <p>Loading.......</p> :
                    <h2>Posts: {posts.length}</h2>
            }
        </div>
    );
};

export default Posts;