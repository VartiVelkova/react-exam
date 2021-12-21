import { Link } from "react-router-dom";

const MyFishCard = ({
    fish
}) => {
    return(
        <div className="game">
                    <div className="image-wrap">
                        <img src={fish.imageUrl} />
                    </div>
                    <h3>{fish.species}</h3>
                    <div className="rating">
                        
                    </div>
                    <div className="data-buttons">
                        <Link to={`/details/${fish._id}`} className="btn details-btn">Details</Link>
                    </div>
        </div>
    )
}

export default MyFishCard;