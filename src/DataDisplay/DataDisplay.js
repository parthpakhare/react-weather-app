import React, { Component } from 'react';

import classes from './DataDisplay.module.css';
import Pin from '../assets/Icons/pin2.svg';
import Temp from '../assets/Icons/temp.svg' ;

class Display extends Component {
    render(){    
    return (
        <>  
            {!this.props.weatherstats ? (
                <h1 className={classes.Nodata}>Enter The City Name</h1>
            ):(
                <ul className={classes.Content}>
                    <li className={classes.Location}>
                        <div className={classes.Temp}>
                            <img src = {Pin} alt="Location" />
                            <h1>{this.props.weatherstats.name},</h1>
                        </div>
                        <h2>{this.props.weatherstats.sys.country}</h2>
                    </li>
                    <li className={classes.Logo}>
                        <img 
                            src = {require(`../assets/Weather/${this.props.weatherstats.weather[0].icon}.svg`).default} 
                            alt={this.props.weatherstats.weather[0].description} />
                        <p>{this.props.weatherstats.weather[0].description}</p>
                    </li>
                    <li className={classes.Data}>
                        <div className={classes.Temp}>
                            <img src = {Temp} alt="Temperature" />
                            <h1>{this.props.weatherstats.main.temp}⁰C</h1>
                        </div><br/>
                        <div className={classes.Temp}>
                            <h4 className={classes.Rborder}>Min : {this.props.weatherstats.main.temp_min}⁰C</h4>
                            <h4 className={classes.Lborder}>Max : {this.props.weatherstats.main.temp_max}⁰C</h4>
                        </div>
                        
                    </li>
                </ul>
            )}
        </>
    )
}}

export default Display;