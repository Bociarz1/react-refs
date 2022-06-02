import React, { Component } from "react";
import CreateRefMethod from "./components/CreateRefMethod";
import CallBackRefMethod from "./components/CallBackRefMethod";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <>
        <CreateRefMethod/> <br/><br/>
        <CallBackRefMethod/>
      </>
    );
  }
}
 
export default App;