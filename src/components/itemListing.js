import React, { Component } from 'react'
import Model from '../components/common/itemModel';



class App extends Component {

  constructor(props){
    super(props);
    this.state={
        item:[],
        index:0
    }
  }

  openPopup = (item,i)=>{
    this.setState({toggle:!this.state.toggle})
    if(item){
     this.setState({ itemDetails:item, index:i})
    }
   }
 
   updateUser = (state, index) =>{
   this.props.updateItemDetails(state, index)
   }

  render() {
    return (
      <div className="dashboard-content userListing-dashboard bg-white table-responsive">
            { this.state.toggle && <Model 
        itemDetails={this.state.itemDetails}
        openPopup={this.openPopup}
        updateUser={this.updateUser}
        index={this.state.index}
        />}
         <h2>ITEM LISTING</h2>
        <table className="table table-striped master-table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {this.props.user.items.map((u,i)=> <tr key={i}>
              <td><img src={u.image}></img></td>
              <td>{u.name}</td>
              <td className>
                <a onClick={this.props.deleteItems.bind(this, u.name)}>
                  <span className="tooltip-reject fct-edit">
                    <img src="/assets/images/reject.png" />
                    <span>DELETE</span>
                  </span>
                </a>
                <a onClick={this.openPopup.bind(this, u,i)}>
                  <span className="tooltip-reject fct-edit">
                    <img src="/assets/images/edit.png" />
                    <span>EDIT</span>
                  </span>
                </a>
              </td>
            </tr>)}
          </tbody>
        </table>
        <div className="create-camp nonfct-submit">
                  <button onClick={this.props.previousPage}>BACK</button>
                </div>
      </div>
    );
  }
}

export default App;