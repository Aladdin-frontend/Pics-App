import React from "react";
import Unsplash from "../API/Unsplash";
//it's a convention to keep our custom import statements last
import SearchBar from "./SearchBar";

//our main app component
class App extends React.Component {
  //the <App /> component state
  state = {images: []};

  //method called from children when the form is submitted , it will use the async-await syntax to handle network requests
  onFormSubmit = async (val) => {
    //the response saves the returned value of the GET request sent through axios client
    const response = await Unsplash.get("/search/photos", {
      //the params is used for setting the search options
      params: {
        //the search term is the entered value on submit
        query: val,
      },
    });

    this.setState({images: response.data.results});
  };

  //our famous render method
  render() {
    return (
      <div className=" ui container ">
        {/* we pass the function as prob to the child component, so it will be called when the event triggers(onSubmit event) */}
        <SearchBar onFormSubmit={this.onFormSubmit} />
        we found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
