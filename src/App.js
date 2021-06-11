import React, { Component } from 'react';
import axios from 'axios';

import classes from './App.module.css';
import Content from './DataDisplay/DataDisplay';
import SearchIcon from './assets/Icons/search.png';



const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: null,
      data: null,
      error: false,
      apiKey: process.env.REACT_APP_API_KEY
    }
  }

  locChangehandler = (event) => {
    this.setState({
      location: event.target.value
    })
  }

  submitHandler = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&appid=${API_KEY}`)
    .then(response => {
      this.setState({
        error: false,
        data: response.data,
      })
    })
    .catch(err => {
      this.setState({
        error: true
      })
    })
  }

  keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      this.submitHandler();
    }
  }

  render () {
    return (
      <div className="App">
        <div className ={classes.Topbar}>
            <h1>Weather Application</h1>
            <div className={classes.Search}>
              <input type="search" 
                placeholder="Enter city ..." 
                name="location"
                onChange={this.locChangehandler}
                onKeyPress={this.keyPressHandler}
                onSubmit={this.submitHandler}>
              </input>
              <button className={classes.Button} onClick={this.submitHandler}>
                <img src={SearchIcon} alt="search"></img>
              </button>
            </div>
            
        </div>
        {this.state.error ? (
          <h1 className={classes.Invalid}>Enter a valid city name.</h1>
        ) : (
          <Content 
            className={classes.display}
            loc={this.state.location}
            weatherstats={this.state.data}
          />
        )}
      </div>
    );
  }
}

export default App;
