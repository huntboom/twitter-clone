import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button, Input } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
     const [tweetMessage,setTweetMessage]=useState('');
     const [tweetImage, setTweetImage] = useState("");
    
     const sendTweet = (e) => {
     e.preventDefault();
         
     db.collection("posts").add({
     displayName: "Hunter Karsseboom",
     username: "huntboom", 
     verified: true,
     text: tweetMessage,
     image: tweetImage,
    });

     setTweetMessage("");
     setTweetImage("");
     }; 
     return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input 
            onChange={e=>setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text" />
        </div>
        <input 
            value={tweetImage}
            onChange={e => setTweetImage(e.target.value)}
            className="tweetBox_image Input"
            placeholder="Optional: Enter image URL"
            type="text"
        />
        <Button onClick={sendTweet} type="submit">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
