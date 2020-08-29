import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

//a functional component responsible for the display of images
//receive the response of the request from the </App/> as a prop
const imageList = (props) => {
  const images = props.imageList.map((image) => {
    //we extract the url and the key and the alt desription from the request response
    return <ImageCard img={image} key={image.id} />;
  });
  return <div className="image-list">{images}</div>;
};

export default imageList;
