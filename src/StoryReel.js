import React from 'react'
import Story from './Story'
import "./StoryReel.css"

var bgStory = [
    "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3135801/pexels-photo-3135801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3131981/pexels-photo-3131981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

const avtImg = [
    "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

const demoReelTitle = "Swapnil Khare";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image={bgStory[0]} profileSrc={avtImg[0]} title={demoReelTitle}/>
            <Story image={bgStory[1]} profileSrc={avtImg[1]} title={demoReelTitle}/>
            <Story image={bgStory[3]} profileSrc={avtImg[3]} title={demoReelTitle}/>
            <Story image={bgStory[4]} profileSrc={avtImg[2]} title={demoReelTitle}/>
            <Story image={bgStory[2]} profileSrc={avtImg[4]} title={demoReelTitle}/>
        </div>
    )
}

export default StoryReel
