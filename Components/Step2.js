import React, { Component } from 'react';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reservName: null,
            duration: null,
            isLockedIn: false,
         }
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleNextStep = this.handleNextStep.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleNextStep (event) {
        event.preventDefault();
        console.log(this.state);
        // this.props.history.push('/steps/second');
    }

    render() { 

        console.log("this.props", this.props)


        return ( 
            <form onSubmit={this.handleNextStep}>
                <label>
                    Reserv name
                    <input
                        name="reservName"
                        type="text"
                        value={this.state.reservName}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    2 weeks
                    <input
                        name="duration"
                        type="radio"
                        value="2 weeks"
                        checked={this.state.duration === '2 weeks'}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>2 month
                    <input
                        name="duration"
                        type="radio"
                        value="2 month"
                        checked={this.state.duration === '2 month'}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Locked in?
                    <input
                        name="isLockedIn"
                        type="checkbox"
                        checked={this.state.isLockedIn}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Ship to this adress" />
            </form>
         );
    }
}

export default Step2;