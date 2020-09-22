import React from "react";
import './Slider.css'
import Buttons from "../Buttons/Buttons";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.startSwiping = this.startSwiping.bind(this);
        this.finishSwiping = this.finishSwiping.bind(this);
        this.state = {
            initialSwipeX: 0,
            initialSwipeY: 0,
            swipeX: 0,
            swipeY: 0,
            swipeInProgress: false
        }
    }

    startSwiping(e) {
        this.setState((prev) => {
            return {
                ...prev,
                swipeX: e.screenX,
                swipeY: e.screenY,
                initialSwipeX: e.screenX,
                initialSwipeY: e.screenY,
                swipeInProgress: true
            }
        })
    }

    finishSwiping(e) {
        if (e.screenX > this.state.initialSwipeX) {
            this.props.changeSlide(-1);
        } else {
            this.props.changeSlide(1);
        }

        this.setState((prev) => {
            return {
                ...prev,
                swipeInProgress: false,
                swipeX: 0,
                swipeY: 0,
                initialSwipeX: 0,
                initialSwipeY: 0
            }
        })
    }

    swipe(e) {
        this.setState((prev) => {
            return {
                ...prev,
                swipeInProgress: true,
                swipeX: e.screenX,
                swipeY: e.screenY
            }
        })
    }

    render() {
        return (
            <div className="content"
                 onTouchStart={(e) => this.startSwiping(e.changedTouches[0])}
                 onTouchEnd={(e) => this.finishSwiping(e.changedTouches[0])}
                 onTouchMove={(e) => this.swipe(e.changedTouches[0])}
            >
                <div className="holder">
                    <img src={this.props.content[this.props.currentSlide]}
                         style={{
                             left: this.state.swipeInProgress ? (50 + 100 * (this.state.swipeX - this.state.initialSwipeX) / window.innerWidth) + '%' : '50%',
                             top: this.state.swipeInProgress ? (50 + 100 * (this.state.swipeY - this.state.initialSwipeY) / window.innerHeight) + '%' : '50%'
                         }}/>
                </div>

                <Buttons changeSlide={this.props.changeSlide}/>
            </div>
        )
    }
}

export default Slider;