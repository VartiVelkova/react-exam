import MyFishCard from "./MyFishCard/MyFishCard.js";


const MyFishList = ({
    fishes
}) => {
    console.log(fishes)
    return (
        <>
        {fishes.length > 0
        ? (<div className="allGames">
            {fishes.map(f => <MyFishCard key={f._id} fish={f} />)}

           </div>
        )
        : <h3 className="no-articles">You are not fish in database</h3>
        }
        </>
    );
};

export default MyFishList;