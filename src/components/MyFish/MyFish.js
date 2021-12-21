import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext.js";
import * as fishService from '../../services/fishService.js';
import FishList from "../FishList/FishList.js";
import MyFishList from "./MyFishList.js";


const MyFish = () => {
    const [fish, setFishes] = useState([]);
    const {user} = useAuthContext();

    useEffect(() => {
        fishService.getMyFish(user._id)
        .then(result => {
            setFishes(result)
        })
    }, [])

    return (
        <>
        <section id="catalog-page">
        <h1>All My Fishing</h1>       
        <MyFishList fishes={fish}/>
        </section>
        </>
    )
    
};


export default MyFish;