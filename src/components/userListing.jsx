import React, { Component } from 'react'
import Model from '../components/common/model';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      toggle:false,
      userDetails:{}
    }
  }


  getUser = user =>{
    this.props.getUser(user);
    this.props.onSubmit();
  }
   openPopup = user=>{
   this.setState({toggle:!this.state.toggle})
   if(user){
    this.setState({ userDetails:user})
   }
  }

  updateUser = (state, id) =>{
  this.props.updateUserDetails(state, id)
  }

  render() {
    return (
      <div className="dashboard-content userListing-dashboard bg-white table-responsive">
        { this.state.toggle && <Model 
        userDetails={this.state.userDetails}
        openPopup={this.openPopup}
        updateUser={this.updateUser}
        />}
        <h2>USER LISTING</h2>
        <table className="table table-striped master-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {this.props.data.map((u,i)=> <tr key={i}>
              <td onClick={this.getUser.bind(this, u)} className="name">{u.name} </td>
              <td>{u.phone_number}</td>
              <td>{u.address}</td>
              <td className>
                <a onClick={this.props.deleteData.bind(this, u.id)}>
                  <span className="tooltip-reject fct-edit">
                    <img src="/assets/images/reject.png" />
                    <span>DELETE</span>
                  </span>
                </a>
                <a onClick={this.openPopup.bind(this, u)}>
                  <span className="tooltip-reject fct-edit">
                    <img src="/assets/images/edit.png" />
                    <span>EDIT</span>
                  </span>
                </a>
              </td>
            </tr>)}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default App;