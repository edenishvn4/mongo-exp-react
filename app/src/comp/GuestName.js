import React, { Component } from 'react';
import axios from 'axios';

class GuestName extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[],
          };
    }
    componentDidMount(){
        axios.get('https://fathomless-caverns-74741.herokuapp.com/api/signatures').then((ambildata)=>{
            console.log(ambildata.data);
            this.setState({
                messages:ambildata.data
            })
        })
    }
    render(){
        const data = this.state.messages.map((item,index)=>{
            var msg= item.message;
            var sign = item.guestSign;
            return(
                <div key={index}>
                    <h2 className="h2sig">-{sign}</h2>
                    <h3 className="h3msg">{msg}</h3>
                </div>
            )
        })
        return(
            <div className="guestdataContainer">
                <h6>Guestbook Messages</h6>
                {data}
            </div>
        )
    }
}
export default GuestName;