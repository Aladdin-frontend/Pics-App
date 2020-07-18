import React from "react";

class SearchBar extends React.Component {
  //the component state
  state = {term: ""};

  //the method that calles the <APP/> with the event value
  //we make it  arrow function to fix a (this) keyword problem
  appSubmitted = (e) => {
    //first we prevent the default behavior (the page refresh)
    e.preventDefault();

    //as it's a controlled form we take the value of the state
    //and send it to the props function as an
    this.props.onFormSubmit(this.state.term);
  };

  //
  render() {
    return (
      <div className="ui segment" style={{marginTop: "20px"}}>
        <form
          className="ui form"
          //an event -- built-in event handler
          onSubmit={this.appSubmitted}
        >
          <div className="field">
            <label>Image Search</label>

            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              //an event -- built-in event handler
              onChange={(e) => {
                //anon function as event handler
                this.setState({term: e.target.value});
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
