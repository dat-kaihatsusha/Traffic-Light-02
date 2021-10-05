import React, { Component } from "react";
import './TrafficLight.css';
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: GREEN
    };


    setInterval(()=>{
      this.setState({currentColor: this.getNextColor(this.state.currentColor)});
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED: return ORANGE;
      case ORANGE: return GREEN;
      default: return RED;
    }
  }
  render() {
    return <div className="TrafficLight">
      <div className={classNames('bulb', 'red', {
        active: this.state.currentColor === RED
      })}></div>
      <div className={classNames('bulb', 'orange', {
        active: this.state.currentColor === ORANGE
      })}></div>
      <div className={classNames('bulb', 'green', {
        active: this.state.currentColor === GREEN
      })}></div>
    </div>;
  }
}

export default TrafficLight;