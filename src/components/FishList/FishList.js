import FishCard from "./FishCard/FishCard.js";

const FishList = ({
    fishes
}) => {
    return (
        <>
        {fishes.length > 0
        ? 
        (<div className="allGames">
            {fishes.map(f => <FishCard key={f._id} fish={f} />)}

           </div>
        )
        :<h2 className="no-articles">Create a new post</h2>
        }
        </>
    );
};

export default FishList;