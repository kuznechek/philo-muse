import React from "react";
import ReactDOM from "react-dom";

class MainButton extends React.Component {
    onclick () {
        window.location.assign('http://localhost:3000/second/');
    }

    render() {
        return (<a onClick={(e) => this.onclick(e)}><i className="fas fa-chart-bar"></i></a>);
    }
}
export default Statistics_button

class Back_button extends React.Component {
    onclick () {
        window.location.assign('http://localhost:3000/');
    }

    render() {
        return (<button  onClick={(e) => this.onclick(e)}>Back </button>);
    }
}
export default Back_button