
import React, { Component } from 'react';

class useModal extends Component {
  constructor(props){
    super(props);
    this.state={
      isShowing:false,
      isRejectShowing:false
    }
  }

   toggle() {
    this.setState({isShowing:!isShowing});
  }

   rejectToggle() {
    this.setState({isRejectShowing: !isRejectShowing});
  }
render(){
  return ({
    isShowing,
    toggle,
    rejectToggle,
    isRejectShowing
    
  })
}
}

export default useModal;