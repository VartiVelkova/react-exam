import { useNavigate } from "react-router-dom";

import * as fishService from '../../services/fishService.js'
import { useAuthContext } from "../../contexts/AuthContext.js";

const Create = () => {

    const {user} = useAuthContext();
    const navigate = useNavigate();

    const onFishCreate = (e) => {
        e.preventDefault();

        let {species, place, imageUrl, description} = Object.fromEntries(new FormData(e.currentTarget));

        fishService.create({
            species,
            place,
            imageUrl,
            description
        }, user.accessToken)
        .then((result) => {
            navigate('/home')
        })
    }
    return (
<section id="create-page" className="auth" >
    <form id="create" onSubmit={onFishCreate} method="POST">
        <div className="container">

            <h1>Create Publication</h1>
            <label htmlFor="species">Species of fish:</label>
            <input type="text" id="title" name="species" placeholder="Enter your species of fish..." />

            <label htmlFor="place">Place:</label>
            <input type="text" id="category" name="place" placeholder="Enter your place..." />

            
            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description"></textarea>
            <input className="btn submit" type="submit" value="Create" />
        </div>
    </form>
</section>       
    );
};

export default Create;