import React, { Component } from 'react';


// function AddressList(props) {
//   const items = props.items;
//   const listItems = items.map((item, index) => 
//     <li key={item.id}>
//       <label>
//         <input name="address" type="radio" value={item.name} />
//         <span>{`${item.name} ${item.address}` }</span>
//       </label>
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addresses: [
              { 
                "id": 1,
                "name": "home",
                "address": "350 Fifth Avenue, 34 floor, New York, NY 10118, USA"
              },
              { 
                "id": 2,
                "name": "office",
                "address": "1227 Arthur Key Suite 012, New York, NY 10118, USA"
              }
            ],
            selectedAddress: "",
         }
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleNextStep = this.handleNextStep.bind(this);
    }

    handleInputChange(event) {
      this.setState({
        selectedAddress: event.target.value
      });
    }


    handleNextStep (event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {  
        return ( 
            <form onSubmit={this.handleNextStep}>
                <ul>
                  {
                    this.state.addresses.map((item, index) => 
                      <li key={item.id}>
                        <label>
                          <input 
                            name="address" 
                            type="radio" 
                            value={item.name} 
                            onChange={this.handleInputChange}
                            checked={this.state.selectedAddress === item.name}
                          />
                          <span>{`${item.name} ${item.address}` }</span>
                        </label>
                      </li>
                    )
                  }
                </ul>
                <input type="submit" value="Ship to this adress" />
            </form>
         );
    }
}

export default Step2;