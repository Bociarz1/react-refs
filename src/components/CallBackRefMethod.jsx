import React, { Component } from "react";

class CallBackRefMethod  extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null
    this.setCbRef = element => {
      this.cbRef = element
    }
  }
// comment componentDidMount to focus on Create Ref Method
  componentDidMount() {
    if (this.cbRef) {this.cbRef.focus()}
  }

  render() { 
    return ( 
      <>
        <b>CallBackRefMethod</b>  <br/>
        <input type="text" placeholder="CallBackRefMethod" ref={this.setCbRef}/> <br/>
      </>
    );
  }
}
 
export default CallBackRefMethod;