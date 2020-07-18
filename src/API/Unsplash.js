import axios from "axios";

//a method for creating an axios client with default values
export default axios.create({
  baseURL: "https://api.unsplash.com",
  //the headers object is a collection of the HTTP request headers
  headers: {
    Authorization: "Client-ID ZF2UFCsqflnr36fRzRP3rJIhjUV4WPKzAJEwmjeWWXE",
  },
});
