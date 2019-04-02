import React, { Component } from "react";
import Swal from "sweetalert2";
import DELETE_WINE from "../../graphql/mutations/DELETE_WINE";
import UPDATE_WINE from "../../graphql/mutations/UPDATE_WINE";
import CreateWine from "../CreateWine";
import WineFormContainer from "../../containers/WineContainer";
import WINES from "../../graphql/queries/WINES";

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000
  });

class ListWines extends Component {
  deleteWine = (id) => {
    const { client } = this.props;
    Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
            if (result.value) {
                client.mutate({
                    variables: {
                        id: id
                    },
                    mutation: DELETE_WINE,
                    refetchQueries: [{
                      query: WINES,
                    }]              
                  })
                  .then(result => { 
                    Toast.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                   })
                  .catch(error => { 
                      Toast.fire({
                    type:"success",
                    title:"Wine Updated Correctly",
                    text:error
                }) });
            }
          })
    }

   handleUpdate = (submitObject) => {
      const { client } = this.props;
      client.mutate({
            mutation: UPDATE_WINE,
            variables: submitObject,
            refetchQueries: [{
              query: WINES,
            }]
          })
          .then(result => { 
              Toast.fire({
                  type: "success",
                  title: "Wine Updated Correctly"                  
              })
           })
          .catch(error => { 
              Toast.fire({
                  type: "success",
                  title: "Wine Updated Correctly",
                  text: error
              });
          });
  }

  inputHandler = e => {
    let { name, value } = e.target;
    if (name === "tastingNotes") {
      this.setState({
        tastingNotes: [...e.target.selectedOptions].map(o => o.value),
      });
    } else {
      if (name === "score") value = Number(value);
      this.setState({ [name]: value });
    }
  };

  render() {    
    const { wines } = this.props;
    return (
      <React.Fragment>
      {
        !wines ? 
          <div> Loading </div> :
          <React.Fragment>
          <div className="container">
           <CreateWine 
             {...this.props}
           />
         </div>
         <div className="d-inline-flex p-2 bd-highlight">
         {
             wines.map((wine, i) => (
               <div key={`wine${i}`} value={wine.id} className="card" style={{width: "18rem", margin:"10px"}}>
                   <img src={wine.image? wine.image: "assets/img/wine-example.jpeg" } class="card-img-top" alt="..." />
                   <div class="card-body">
                       <h5 class="card-title">Wine</h5>
                       <WineFormContainer
                         wine={wine}
                         onSubmit={this.handleUpdate}
                       />
                       <button
                         className="btn btn-outline-danger" 
                         onClick={() => this.deleteWine(wine.id)}>Delete
                       </button>
                   </div>
               </div>
             ))
           }
         </div>
       </React.Fragment>
      }
      </React.Fragment>
    );
  }

}


export default ListWines;
