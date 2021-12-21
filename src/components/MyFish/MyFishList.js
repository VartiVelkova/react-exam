import MyFishCard from "./MyFishCard/MyFishCard.js";


const MyFishList = ({
    fishes
}) => {
    
    return (
        <>
        {fishes.length > 0
        ? (<div className="allGames">
            {fishes.map(f => <MyFishCard key={f._id} fish={f} />)}

           </div>
        )
        : <h3 className="no-articles">You doesn`t have publication in database</h3>
        }
        </>
    );
};

export default MyFishList;