import React from "react";
import Slider from "./Slider/Slider";
import apple1 from "../img/apple1.jpg";
import apple2 from "../img/apple2.jpg";
import apple3 from "../img/apple3.jpg";
import apple4 from "../img/apple4.jpg";
import apple5 from "../img/apple5.jpg";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeSlide = this.changeSlide.bind(this);
        this.state = {
            currentSlide: 0,
            content: [apple1, apple2, apple3, apple4, apple5]
        }
    }

    changeSlide(delta) {
        this.setState((prev) => {
            let newSlide = prev.currentSlide + delta
            if (newSlide < 0 || newSlide > this.state.content.length - 1) {
                return;
            }
            return {
                ...prev,
                currentSlide: newSlide
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Slider currentSlide={this.state.currentSlide} content={this.state.content}
                        changeSlide={this.changeSlide}/>
                <Breadcrumbs currentSlide={this.state.currentSlide}/>
            </React.Fragment>
        )
    }
}

export default App;