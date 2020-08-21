import React from "react";

//a functional component responsible for the display of images
//receive the response of the request from the <App/> as a prop
const imageList = (props) => {
  const images = props.imageList.map((image) => {
    //we extract the url and the key and the alt desription from the request response
    return (
      <img
        alt={image.alt_description}
        key={image.id}
        src={image.urls.regular}
      />
    );
  });
  return <div>{images}</div>;
};

export default imageList;
