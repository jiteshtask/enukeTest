import React, { Component } from 'react';
import UserListing from './userListing';
import ItemListing from './itemListing';
import UserData from '../util/userData'

class Index extends Component {


  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      user:{},
      data:[],
      items:[]
    };
  }
  componentDidMount(){
    this.setUserData()
  }

  setUserData =()=>{
    this.setState({data : UserData});
  }

  deleteData =id=>{
   let updatedData = this.state.data;
    updatedData.map((s,i)=>{
     if(s.id===id){
      updatedData.splice(i, 1)
     }
   })
   this.setState({data: updatedData});
  }

  deleteItems=name=>{
    let updatedItem = this.state.items;
    updatedItem.map((s,i)=>{
     if(s.name===name){
        updatedItem.splice(i, 1)
     }
   })
   this.setState({items: updatedItem});
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  getUser =user =>{
      this.setState({user})
      this.setState({items: user.items});

  }

  updateUserDetails = (state, id) =>{
   let updatedData = this.state.data;
   updatedData.map((u,i)=>{
  if(u.id==id){
      u.name=state.name;
      u.phone_number=state.phone;
      u.address=state.address
  }
   })
   this.setState({data: updatedData});
  }

  updateItemDetails =(state, index) =>{
    let updatedItem = this.state.items;
    debugger;
    updatedItem[index].name=state.name
   this.setState({items: updatedItem});
  }
  
 
  render() {
    const { page } = this.state;
    if (page === 1) {
      return <UserListing 
        onSubmit={this.nextPage}
        getUser={this.getUser}
        deleteData={this.deleteData}
        data={this.state.data}
        updateUserDetails={this.updateUserDetails}
        />
    }

    if (page === 2) {
      return (
        <ItemListing
          handleBack={this.previousPage}
          user={this.state.user}
          deleteItems={this.deleteItems}
          updateItemDetails={this.updateItemDetails}
          previousPage={this.previousPage}
        />
      );
    }
    return null;
  }


}

export default Index;