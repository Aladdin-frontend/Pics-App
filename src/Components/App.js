import React from "react";
import axios from "axios";

//it's a convention to keep our custom import statements last
import SearchBar from "./SearchBar";

//our main app component
class App extends React.Component {
  //method to be called when the form is submitted
  onFormSubmit(val) {
    //just a test value for now
    console.log(val);
  }

  //our famous render method
  render() {
    return (
      <div className=" ui container ">
        {/* the search bar , the one when submitted the fun begins */}
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
