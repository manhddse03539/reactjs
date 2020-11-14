import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames'
const RED = 0;
const GREEN = 1;
const YELLOW = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor : RED
        }
        setInterval(()=>{
            this.setState ({
                currentColor : this.getNextColor(this.state.currentColor)
            });
        },1000);        
    }   
    // get next bulb color
    getNextColor(color) {
        switch(color){
            case RED: 
                return GREEN;
            case GREEN: 
                return YELLOW;
            default: 
                return RED;
        }
    }
    render() {
        const {currentColor} = this.state;
        return  <div className="TrafficLight">
                <div className={classNames('bulb','red', { active: currentColor === RED })} />
                <div className={classNames('bulb','green', { active: currentColor === GREEN })} />
                <div className={classNames('bulb','yellow', { active: currentColor === YELLOW })} />
            </div>;
    }
}

export default TrafficLight;