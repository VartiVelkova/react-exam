import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { types, useNotificationContext } from '../../contexts/NotificationContext.js';
import useFishState from '../../hooks/useFishState.js';
import * as fishService from '../../services/fishService.js';
import * as likeService from '../../services/likeService.js';
import ConfirmDialog from '../Common/ConfirmDialog/ConfirmDialog.js';

import './Details.css';

 

const Details = () => {

    const navigate = useNavigate();
    const {user} = useAuthContext();
    const {addNotification} = useNotificationContext();
    const {fishId} = useParams();
    const [ fish, setFish ] = useFishState(fishId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        likeService.getFishLikes(fishId)
        .then(likes => {
            setFish(state => ({ ...state, likes}))
        })
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault();
        fishService.deleteFish(fishId, user.accessToken)
        .then(() => {
            navigate('/')
        })
        .finally(() => {
            setShowDeleteDialog(false)
        })
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setShowDeleteDialog(true);

    };

    const ownerButton = (
        <>
        <div className="buttons">
            <Link to={`/edit/${fish._id}`} className="button">Edit</Link>
            <Link to="#" className="button" onClick={deleteClickHandler}>Delete</Link>
        </div>
        </>
    );

    const likeButtonClick = () => {
        if(user._id === fish._ownerId){
            return;
        }
        if(fish.likes.includes(user._id)){
            addNotification('You can not like again!');
            return;


        }

        likeService.like(user._id, fishId)
        .then(() =>{
            setFish(state => ({...state, likes: [...state.likes, user._id]}))
            addNotification('Successfuly liked a fish...', types.success)
        })

    };

    const userButtons = <Button onClick={likeButtonClick} disabled={fish.likes?.includes(user._id)}>Like</Button>

    return (
        <>
        <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">

                    <div className="game-header">
                        <img className="game-img" src={fish.imageUrl} />
                        <h1>{fish.species}</h1>
                        <h4>{fish.place}</h4>
                        
                        
                    </div>
                    <span id='likeButton'>Likes: {fish.likes?.length || 0}</span>
                    <p className="text">{fish.description}</p>


                    <div className="details-comments">
                        {user._id && (user._id === fish._ownerId
                        ? ownerButton
                        : userButtons
                        )}
                    </div>



                </div>


                

                <div>
            
            
        </div>

            </section>    

</>
    );
};

export default Details;