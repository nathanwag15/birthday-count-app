import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class BirthdayForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
            formCompleted: false

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
        this.renderStuff = this.renderStuff.bind(this)
    }
    
    handleChange(date){
        this.setState({
            startDate: date
        })
    }   

    handleGenerate(){
        this.setState({
            formCompleted: true
        })
    }

    renderStuff(){
        if(this.state.formCompleted){
            return(
            <h2>
                This is only appearing if the form has been completed. Show Countdown timer. 
            </h2>)
        } return(
            <h2>
                dont show nothin
            </h2>
        )
        
    }

    render () {
        return(
            <div>
                <h1>BirthdayForm Component</h1>
                <DatePicker 
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <a onClick={this.handleGenerate}>Generate Countdown</a>
                {this.renderStuff()}
            </div>
        )
    }
}

export default BirthdayForm;