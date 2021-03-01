import { Avatar, Button } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react'
import db from './firebase';
import firebase from "firebase"
import "./MessageSender.css"
import { useStateValue } from './StateProvider';

function MessageSender() {
    
    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault() ;
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageURL,
            username: user.displayName
        })
        // console.log("inside handle submit")
        setImageURL("");
        setInput("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" 
                        placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)} 
                        placeholder="image/GIF URL (Optional)" />
        
                    <Button className="messageSender__button" onClick={handleSubmit} type="submit">Hidden text</Button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
