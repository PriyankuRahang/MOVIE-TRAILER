// App..js
  
import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium';
  
function App() {
  
    //Setting up the initial states using
    // react hook 'useState"
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] =
        useState("https://youtu.be/bMknfKXIFA8");
  
    //A function to fetch the required URL
    // and storing it inside the
    // videoURL state variable
    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }
  
    return (
      
      <StyleRoot>
        <main>
        <div className="App">
            <div className="search-box">
              
                <label>
                <h2>View in Desktop/Laptop for best experience</h2>
                    <h1>
                      Watch any video direct from Youtube
                      </h1>{" "}
                </label>
                <input type="text" onChange=
                    {(e) => { setVideo(e.target.value) }} />
  
                <button onClick={() => { handleSearch() }}>
                    Search
                </button>
                
            </div>
  
      <div id="new">
      Using 'ReactPlayer' component to
             display the video
        </div >
            <ReactPlayer url={videoURL} controls={true} />
        </div>
        </main>
        <footer>
            <h4>copyright&copy;PriyankuRahang</h4>
            <a href="https://github.com/PriyankuRahang">Meet the Developer</a>|
            <a href="rahangpriyanku@gmail.com">Email</a>|   
        </footer>
        
        </StyleRoot>
    );
    
}

  
export default Radium(App);