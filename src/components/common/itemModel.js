import React , {Component}from 'react';

class  BudgetModel extends Component  {

  constructor(props){
    super(props);
    this.state={
     name:''
    }
  }

componentDidMount(){
  this.setValues();
} 

setValues = ()=>{
  this.setState({name: this.props.itemDetails.name})
}

getName= e =>{
  this.setState({name:e.target.value});
}

updateUser =(e)=>{
  this.props.updateUser(this.state, this.props.index);
  this.props.openPopup()
}


render(){
return(
  <div>
  <div className="modal-overlay">
    <div className="modal-wrapper thankyou-popup" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-head-cross rate-modal">
          <button type="button" className="modal-close-button" onClick={this.props.openPopup}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
       
        <div className="editNonFct-header modal-header" >
          <h4 className="popup-head rqst-head fct-head modal-title">Edit Item</h4></div>
        <div className="editNonFct-modal modal-body">
          <div className="bg-white">
            
              <div className="popupCampaign-container">
                <div className="campaign-input master-inputs nonFct">
                  <div className="input-tag signup-tag clearfix fct-input">
                    <label className="static-value">Name</label>
                    <input name="stationName" type="text" className="form-control" value ={this.state.name}  onChange={this.getName}/>
                  </div>
                </div>
                <div className="create-camp nonfct-submit">
                  <button  onClick={this.updateUser}>SAVE CHANGES</button>
                </div>
              </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
</div>
)
}
}

export default BudgetModel;