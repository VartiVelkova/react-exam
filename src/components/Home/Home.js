import { useEffect, useState } from "react";

import * as fishService from '../../services/fishService.js';

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
<div id="home-page">
          
    <FishList fishes={fish} />
</div>
</section>
    );
};

export default Home;