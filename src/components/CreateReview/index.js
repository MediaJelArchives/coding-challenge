import React, { Component } from "react";
import { Mutation } from "react-apollo";
import CREATE_REVIEW from "../../graphql/mutations/CREATE_REVIEW";

class CreateReview extends Component {
  state = {
    yearPredict: undefined,
    pricePredict: undefined,
    score: undefined,
    tastingNotes: [],
  };

  inputHandler = e => {
    let { name, value } = e.target;
    if (name === "tastingNotes") {
      this.setState({ tastingNotes: [...e.target.selectedOptions].map(o => o.value) });
    } else {
      if (name === "score") value = Number(value);
      this.setState({ [name]: value });
    }
  };

  render() {
    const { score, tastingNotes ,pricePredict, yearPredict } = this.state;
    const { wineTaster, wine, tastingSession } = this.props;
    return (
      <div>
        <div>
          <input class="form-control"
            name="score"
            value={score}
            onChange={this.inputHandler}
            type="number"
            placeholder="Score: 0 - 100"
          />
          <br />
          <input class="form-control"
            name="pricePredict"
            value={pricePredict}
            onChange={this.inputHandler}
            type="text"
            placeholder="? USD"
          />
          <br />
          <input class="form-control"
            name="yearPredict"
            value={yearPredict}
            onChange={this.inputHandler}
            type="text"
            placeholder="1990"
          />
          <br />
          <select class="form-control"
            name="tastingNotes"
            value={tastingNotes}
            onChange={this.inputHandler}
            type="text"
            placeholder="Tasting Notes"
            multiple={true}
          >
            <option value="COMPLEX">COMPLEX</option>
            <option value="OAKED">OAKED</option>
            <option value="JUICY">JUICY</option>
          </select>
          <br />
        </div>
        <Mutation
          mutation={CREATE_REVIEW}
          variables={{
            wine,
            wineTaster,
            tastingSession,
            score,
            tastingNotes,
            yearPredict,
            pricePredict
          }}
        >
          {postMutation => <button className="btn btn-outline-primary" onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateReview;
