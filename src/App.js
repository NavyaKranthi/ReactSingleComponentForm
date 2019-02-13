import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="signupSection">
          <div className="info">
            <h2>WELCOME</h2>
            <pre>




            </pre>

            <h3>FILL THE DETAILS HERE</h3>
          </div>
          <form action="#" method="POST" className="signupForm" name="signupform">

            <ul className="noBullet">
              <li>
                <label for="Title"></label>
                <input type="text" className="inputFields" id name="Title" placeholder="Title" value="" />
              </li>
              <li>
                <label for="Color"></label>
                <input type="text" className="inputFields" id="Color" name="Color" placeholder="Color" value="" />
              </li>
              <li>
                <label for="Value"></label>
                <input type="text" className="inputFields" id="value" name="value" placeholder="value" />
              </li>
              <li>
                <label for="lable"></label>
                <input type="text" className="inputFields" id="Lable" name="Lable" placeholder="Lable" />
              </li>
              <li>
                <label for="Lable Color"></label>
                <input type="text" className="inputFields" id="Lable Color" name="Lable Color" placeholder="Lable Color" />
              </li>

              <li id="center-btn">
                <input type="submit" id="join-btn" name="Submit" alt="Join" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>


    );
  }
}

export default App;
