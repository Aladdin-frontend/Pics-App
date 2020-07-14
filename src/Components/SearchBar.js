import React from "react";

class SearchBar extends React.Component {
  //the component state
  state = {term: ""};

  //the method that calles the <APP/> with the event value

  appSubmitted = (e) => {
    //first we prevent the default behavior (the page refresh)
    e.preventDefault();

    //as it's a controlled form we take the value of the state
    //and send it to the props event handling function
    this.props.onFormSubmit(this.state.term);
  };

  //
  render() {
    return (
      <div className="ui segment" style={{marginTop: "20px"}}>
        <form className="ui form" onSubmit={this.appSubmitted}>
          <div className="field">
            <label>Image Search</label>

            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              //an event
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
