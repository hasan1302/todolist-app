import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export class HelloPlanet extends React.Component {
    render() {
        console.log(this.props);
        return <h1>HEY YOU ARE ON {this.props.num + 5}</h1>
    }
}

HelloPlanet.propTypes = {
    num: PropTypes.number
};

HelloPlanet.defaultProps = {
    num: 10
};

//export default HelloPlanet;
