import React from "react";
import "./Buttons.css";

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <div className="arrow left" onClick={() => this.props.changeSlide(-1)}>
                    <div className="dummy-child"></div>
                    <span>&#60;</span>
                </div>
                <div className="arrow right" onClick={() => this.props.changeSlide(1)}>
                    <div className="dummy-child"></div>
                    <span>&#62;</span>
                </div>

            </React.Fragment>
        )
    }

}

export default Buttons;