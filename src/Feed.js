import React, { useEffect, useState } from 'react'
import "./Feed.css"
import db from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) =>(
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data:doc.data()
            })))
        ));
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) =>(
                <Post 
                    id={post.id}   
                    image={post.data.image}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed
