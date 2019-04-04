import React, { Component } from "react";
import { Mutation, withApollo } from "react-apollo";
import WINES from "../../graphql/queries/WINES";
import CREATE_WINE_TASTER from "../../graphql/mutations/CREATE_WINE_TASTER";
import OptionsListWines from "../OptionsListWines";

import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000
  });

class CreateWineTaster extends Component {
  state = {
    isOpen: false,
    name: '',
    nationality: '',
    gender: "MALE",
    age: undefined,
    favouriteWine: '',
    existingWines: false,
  };

  async componentDidMount() {
    const { client } = this.props;
    const res = await client.query({
      query: WINES
    });
    this.setState({ existingWines: res.data.wines.length > 0 })
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  inputHandler = e => {
    let { name, value } = e.target;
    if (name === "age") value = Number(value);
    this.setState({ [name]: value });
  };

  onCompleted = () => {
    Toast.fire({
      type:"success",
      title:"Wine Added Successfully"
    });
    this.setState({
      name: "",
      nationality: "",
      gender: "MALE",
      age: undefined,
      favouriteWine: "",
    });
    this.button.click();
  }

  render() {
    const {
        name,
        nationality,
        gender,
        age,
        favouriteWine,
        existingWines,
      } = this.state;
    return (
      <div style={{marginTop:"10px"}}>
       { existingWines ? 
          (<div>
          <button class="btn btn-outline-primary"
                  onClick={this.toggle}
                  data-toggle="modal"
                  data-target="#exampleModal">
                  Create New Wine Taster
          </button>
          <div class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create New Wine Taster</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
              <input
              class="form-control"
                name="nationality"
                value={nationality}
                onChange={this.inputHandler}
                type="text"
                placeholder="Nationality"
              />
              <br />
              <select
              class="form-control"
                name="gender"
                value={gender}
                onChange={this.inputHandler}
                type="text"
                placeholder="Gender"
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              <br />
              <input
                class="form-control"
                name="age"
                value={age}
                onChange={this.inputHandler}
                type="number"
                placeholder="Age"
              />
              <br />
              <OptionsListWines
                childCB={id => this.setState({ favouriteWine: id })}
                placeholder="Favourite Wine"
              />
              <br />
            </div>
              </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" ref={el => this.button = el} data-dismiss="modal">Close</button>
                  <Mutation
                  mutation={CREATE_WINE_TASTER}
                  variables={{
                    name,
                    nationality,
                    gender,
                    age,
                    favouriteWine,
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
          )
          : (
            <div style={{ 
              color: 'black',
              backgroundColor: 'bisque',
              fontSize: '1.5em',
            }}>
              Make sure to create a wine first
            </div>
          )
        }
      </div>
    );
  }
}

export default withApollo(CreateWineTaster);
