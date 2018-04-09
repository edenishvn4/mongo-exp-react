import React, { Component } from 'react';
import axios from 'axios';

class GuestBook extends Component{
    constructor(props){
        super(props);

        this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
        this.handleMessageofGuest = this.handleMessageofGuest.bind(this);

        this.state = {
            SignatureOfGuest: "",
            MessageofGuest: "",
          };
    }

    handleSignatureOfGuest(event) {
        this.setState({ SignatureOfGuest: event.target.value });
    }

    handleMessageofGuest(event) {
          this.setState({ MessageofGuest: event.target.value });
    }
    addToGuestBook = (event) => {
        event.preventDefault();
        this.setState({
          SignatureOfGuest: event.target.value,
          MessageofGuest: event.target.value,
        });

        axios.post('https://fathomless-caverns-74741.herokuapp.com/api/signatures', {
            SignatureOfGuest: this.state.SignatureOfGuest,
            MessageofGuest: this.state.MessageofGuest,
          })
        .then(response => {
          console.log(response, 'Signature added!');
        })
        .catch(err => {
          console.log(err, 'Signature not added, try again');
        });

        this.setState({
            SignatureOfGuest: "",
            MessageofGuest: "",
          });
    }
    render(){
        return(
            <div className="container">
            <form>
            <div className="form-group">
                <label htmlFor="SignForName">Name Sign</label>
                <input onChange={this.handleSignatureOfGuest} id="SignForName" name="SignatureOfGuest" className="form-control" value={this.state.SignatureOfGuest} placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <label htmlFor="MessageTextArea">Your Message</label>
                <textarea onChange={this.handleMessageofGuest} name="MessageofGuest" className="form-control" value={this.state.MessageofGuest} id="MessageTextArea" placeholder="Type a message" />
            </div>
            <button className="btn btn-success" type="submit" onClick={this.addToGuestBook}> Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" /></button>
            </form>
            </div>
        )
    }
}
export default GuestBook;