import { Link } from "react-router-dom";

const FishCard = ({
    fish
}) => {
    return (
        <li className="allGames-info">
            <img src={fish.imageUrl} />
            <h6>{fish.place}</h6>
            <h2>{fish.species}</h2>
            <Link to={`/details/${fish._id}`} className="details-button">Details</Link>
        </li>
    );
};

export default FishCard;