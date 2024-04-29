import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const Photos = () => {
    const navigation=useNavigation();
    console.log('from photos',navigation)

    const [photos,setPhotos]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[]);
    return (
        <div>
            {
                navigation.state==="loading"? <p>Loading.......</p>:
            <h2>Photos: {photos.length}</h2>
            }
        </div>
    );
};

export default Photos;