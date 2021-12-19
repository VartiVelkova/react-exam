import { useEffect, useState } from "react";

import * as fishService from '../../services/fishService.js';
import FishCard from "../FishList/FishCard/FishCard.js";
import FishList from "../FishList/FishList.js";

const Home = () => {
    const [fish, setFish] = useState([]);

    useEffect(() =>{
        fishService.getAll()
        .then(result => {
            setFish(result)
        })
        .catch(err => console.log(err))
    }, [])

    return (
<section id="welcome-world">

<div className="welcome-message">
    <h2>The latest publicatons</h2>
    <h3>Only in Fishing</h3>
</div>
<img src="./images/item-06.jpg" alt="hero" />

<div id="home-page">
    <h1>The most liked posts</h1>       
    <FishList fishes={fish} />
</div>
</section>
    );
};

export default Home;