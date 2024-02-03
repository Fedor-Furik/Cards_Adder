import React from 'react'
import Item from "./Components/Item"
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:  'nn',
      years: 0,
      status: "no status",
      inputNumber: 0,
      inputName: "no name",
      inputStatus: "no status"
    };
  }

  addNumber = () => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.years = this.state.inputNumber;
    this.setState(copyState);
  };
  changeInputNum = (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.inputNumber = event.target.value;
    this.setState(copyState);
  }
  addName = () => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.name = this.state.inputName;
    this.setState(copyState);
  };
  changeInputNam = (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.inputName = event.target.value;
    this.setState(copyState);
  }
  addStatus = () => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.status = this.state.inputStatus;
    this.setState(copyState);
  };
  changeInputStat= (event) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.inputStatus = event.target.value;
    this.setState(copyState);
  }
  render(){
    return (
      <>
      <input 
        type="number" 
        placeholder='number'
        value={this.state.inputNumber} 
        onChange={this.changeInputNum}
      />
      <input 
        type="string" 
        placeholder='name'
        value={this.state.inputName} 
        onChange={this.changeInputNam}
      />
      <input 
        type="string" 
        placeholder='name'
        value={this.state.inputStatus} 
        onChange={this.changeInputStat}
      />
      <button onClick={this.addNumber}>SEND YEARS</button>
      <button onClick={this.addName}>SEND NAME</button>
      <button onClick={this.addStatus}>SEND STATUS</button>
      <Item content={this.state} />
      </>
    )
  }
}

export default App
