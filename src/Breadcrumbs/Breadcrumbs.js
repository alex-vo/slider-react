import React from "react";
import './Breadcrumbs.sass'

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
    }

    isSlideActive(slideIndex) {
        return slideIndex == this.props.currentSlide
    }

    render() {
        return (
            <div className="breadcrumbs">
                <span className={`dot ${this.isSlideActive(0) ? "active" : ""}`}></span>
                <span className={`dot ${this.isSlideActive(1) ? "active" : ""}`}></span>
                <span className={`dot ${this.isSlideActive(2) ? "active" : ""}`}></span>
                <span className={`dot ${this.isSlideActive(3) ? "active" : ""}`}></span>
                <span className={`dot ${this.isSlideActive(4) ? "active" : ""}`}></span>
            </div>
        )
    }
}

export default Breadcrumbs;