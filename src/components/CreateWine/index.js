import React, { Component } from "react";
import { Mutation } from "react-apollo";

import CREATE_WINE from "../../graphql/mutations/CREATE_WINE";
import WINES from "../../graphql/queries/WINES";

import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000
  });

class CreateWine extends Component {
  
  state = {
    isOpen: false,
    name: "",
    grapes: [],
    winery: "",
    year: null,
    alcohol: null,
    price: null,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  inputHandler = e => {
    let { name, value } = e.target;
    if (name === "grapes") {
      this.setState({
        grapes: [...e.target.selectedOptions].map(o => o.value),
      });
    } else {
      if (name === "price" || name === "year" || name === "alcohol")
        value = Number(value);
      this.setState({ [name]: value });
    }
  };

  onCompleted = () => {
    Toast.fire({
      type:"success",
      title:"Wine Added Successfully"
    });
    this.setState({
      name: "",
      grapes: [],
      winery: "",
      year: undefined,
      alcohol: undefined,
      price: undefined,
    });
    this.button.click();
  }

  render() {
    const { name, grapes, winery, year, alcohol, price, isOpen } = this.state;
    return (
      <div style={{marginTop:"10px"}}>
        <button class="btn btn-outline-primary "
                onClick={this.toggle}
                data-toggle="modal"
                data-target="#exampleModal"
        >Create New Wine</button>
        <div class={"modal fade"} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Wine</h5>
              <button ref={el => this.button = el} type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
            <input
              class="form-control"
              name="name"
              value={name}
              onChange={this.inputHandler}
              type="text"
              placeholder="Name"
            />
            <br />
            <select
              class="form-control"
              name="grapes"
              value={grapes}
              onChange={this.inputHandler}
              type="text"
              placeholder="Grapes"
              multiple={true}
            >
              <option value="GEWURZTRAMINER">GEWURZTRAMINER</option>
              <option value="CHARDONNAY">CHARDONNAY</option>
              <option value="SAUVIGNON_BLANC">SAUVIGNON BLANC</option>
              <option value="SYRAH">SYRAH</option>
              <option value="MERLOT">MERLOT</option>
              <option value="CABERNET_SAUVIGNON">CABERNET SAUVIGNON</option>
              <option value="PINOT_NOIR">PINOT NOIR</option>
            </select>
            <br />
            <input
              class="form-control"
              name="winery"
              value={winery}
              onChange={this.inputHandler}
              type="text"
              placeholder="Winery"
            />
            <br />
            <input
              class="form-control"
              name="year"
              value={year}
              onChange={this.inputHandler}
              type="number"
              placeholder="Year"
            />
            <br />
            <input
              class="form-control"
              name="alcohol"
              value={alcohol}
              onChange={this.inputHandler}
              type="number"
              placeholder="Alcohol percentage"
            />
            <br />
            <input
              class="form-control"
              name="price"
              value={price}
              onChange={this.inputHandler}
              type="number"
              placeholder="Price"
            />
          </div>
        </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <Mutation
              mutation={CREATE_WINE}
              refetchQueries={[{
                query: WINES,
              }]}
              variables={{
                name,
                grapes,
                winery,
                year,
                alcohol,
                price,
              }}
              onCompleted={this.onCompleted}
            >
              {postMutation => <button class="btn btn-primary" onClick={postMutation}>Save changes</button>}
            </Mutation>
            </div>
          </div>
        </div>
      </div>
        
          
      </div>
    );
  }
}

export default CreateWine;
