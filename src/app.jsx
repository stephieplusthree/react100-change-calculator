import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0, 
    }
    this.updateValues = this.updateValues.bind(this);
    this.ChangeCalc = this.ChangeCalc.bind(this);
    this.ClickHandle = this.ClickHandle.bind(this);   
}
updateValues(event) {
  this.setState({[event.target.name]: event.target.value});
}
ChangeCalc(amountDue, amountReceived) {
  amountDue = this.state.amountDue;
  amountReceived = this.state.amountReceived;
  
  let due = amountDue; 
  let received = amountReceived; 
  let cash = received - due;
  return cash.toFixed(2);
}
ClickHandle() {
  let cash = this.ChangeCalc();
  let message = cash;
  
  if (cash >= 0) {
    this.setState({output: `The total change due is $${message}`});
  } 
  if (cash < 0) {
    this.setState({output: `Additional money owed.`});
  }
  let dollars = Math.floor(cash);
  let twenties =  Math.floor(dollars/20);
  this.setState({twenties: `${twenties}`});
  let change1 = dollars - twenties * 20;
  let tens = Math.floor(change1/10);
  this.setState({tens: `${tens}`});
  let change2 = change1 - tens *10;
  var fives = Math.floor(change2/5);
  this.setState({fives: `${fives}`});
  var change3 = change2 - fives * 5;
  var ones = change3
  this.setState({ones: `${ones}`});
  let ccoins = cash - dollars;
  let coins = ccoins.toFixed(2);
  let quarters = Math.floor(coins / 0.25);
  this.setState({quarters: `${quarters}`});
  let ccoins1 = coins - quarters * 0.25;
  let coins1 = ccoins1.toFixed(2);
  let dimes = Math.floor(coins1 / 0.10);
  this.setState({dimes: `${dimes}`});
  let ccoins2 = coins1 - dimes * 0.10;
  let coins2 = ccoins2.toFixed(2);
  let nickels = Math.floor(coins2 / 0.05);
  this.setState({nickels: `${nickels}`});
  let ccoins3 = coins2 - nickels * 0.05;
  let coins3 = ccoins3.toFixed(2);
  let pennies = Math.floor(coins3 / 0.01);
  this.setState({pennies: `${pennies}`});
}
  render() {
    return (
      <div className='container'>
        <h1 style={{color: "white"}}>Change Calculator</h1>
        <hr />
        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Enter Information</div>
              <div className='panel-body'>
                <p>How much is due?</p>
                <input name='amountDue' type='number' value = {this.state.amountDue} onChange = {this.updateValues}/>
              </div>
              <div className='panel-body'>
                <p>How much was received?</p>
                <input name='amountReceived' type='number' value = {this.state.amountReceived} onChange = {this.updateValues}/>
              </div>
              <button className='btn btn-primary btn-block' name ='submit' type='button'  onClick = {this.ClickHandle}>Calculate Change</button>
            </div>
          </div>  
          <div className='col-sm-8'> 
          <div className="panel panel-default">
            <div className="alert alert-success">
              {this.state.output}
            </div>
            <div className='panel-body'>
              <div className='changeTable'>
                <div className='col-sm-3 center-block' name='twenties'>
                    <p>Twenties</p>
                    <p className="change">{this.state.twenties}</p>
                  </div>
                  <div className='col-sm-3' name='tens'>
                    <p>Tens</p>
                    <p className="change">{this.state.tens}</p>
                  </div>
                  <div className='col-sm-3' name='fives'>
                    <p>Fives</p>
                    <p className="change">{this.state.fives}</p>
                  </div>
                  <div className='col-sm-3' name='ones'>
                    <p>Ones</p>
                    <p className="change">{this.state.ones}</p>
                  </div>
                  <div className='col-sm-3' name='quarters'>
                    <p>Quarters</p>
                    <p className="change">{this.state.quarters}</p>
                  </div>
                  
                  <div className='col-sm-3' name='dimes'>
                    <p>Dimes</p>
                    <p className="change">{this.state.dimes}</p>
                  </div>
                  
                  <div className='col-sm-3' name='nickels'>
                    <p>Nickels</p>
                    <p className="change">{this.state.nickels}</p>
                  </div>
                  <div className='col-sm-3' name='pennies'>
                    <p>Pennies</p>
                    <p className="change">{this.state.pennies}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;