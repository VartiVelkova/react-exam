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
        :<h3 className="no-articles">No fishing in database</h3>
        }
        </>
    );
};

export default FishList;