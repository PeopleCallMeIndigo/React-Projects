import React from 'react';
import './App.css';
import Testimony from "./components/Testimony.jsx";

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="main-container">
          <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp:</h1>
          <Testimony 
          img="Emma"
          name="Emma Bostian"
          country="Sweden"
          charge="Software Engineer"
          company="Spotify"
          testimony={["I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on " , <b>freeCodeCamp</b>, " gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."]}
          />
          <Testimony 
          img="Sarah"
          name="Sarah Chima"
          country="Nigeria"
          charge="Software Engineer"
          company="ChatDesk"
          testimony={[<b>freeCodeCamp</b>, " was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."]}
          />
          <Testimony 
          img="Shawn"
          name="Shawn Wang"
          country="Singapore"
          charge="Software Engineer"
          company="Amazon"
          testimony={["It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on " , <b>freeCodeCamp</b>, ". Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."]}
          />
        </div>
      </div>
    );
  }
}

export default App;
