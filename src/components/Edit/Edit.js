import * as fishService from '../../services/fishService.js';
import useFishState from '../../hooks/useFishState.js';
import { useNavigate, useParams } from 'react-router-dom';




const Edit = () => {
    const {fishId} = useParams();    
    const [fish, setFish] = useFishState(fishId);
    const navigate = useNavigate()

    const editSubmitHandler = (e) => {
        e.preventDefault();

        let fishData = Object.fromEntries(new FormData(e.currentTarget));

        fishService.edit(fish._id, fishData);
        navigate(`/details/${fish._id}`)

    };


    return (
<section id="edit-page" className="auth">
    <form id="edit" method='POST' onSubmit={editSubmitHandler}>
        <div className="container">

            <h1>Edit Fish</h1>
            <label htmlFor="leg-title">Species of fish</label>
            <input type="text" id="title" name="species" defaultValue={fish.species} />

            <label htmlFor="category">Place</label>
            <input type="text" id="category" name="place" defaultValue={fish.place} />

            
            <label htmlFor="fish-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" defaultValue={fish.imageUrl} />

            <label htmlFor="description">Description: </label>
            <textarea name="description" id="summary" defaultValue={fish.description}></textarea>
            <input className="btn submit" type="submit" value="Edit Fish" />

        </div>
    </form>
</section>
    );
};

export default Edit;