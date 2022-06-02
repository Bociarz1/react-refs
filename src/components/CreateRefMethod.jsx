import React, { Component } from "react";

class CreateRefMethod extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }  

  render() { 
    return ( 
      <>
        <b>CreateRefMethod</b>  <br/>
        <input type="text" placeholder="CreateRefMethod" ref={this.inputRef}/>
      </>
    );
  }
}
 
export default CreateRefMethod;