import React from "react";

class ImageCard extends React.Component {
  //a constructor to set react refs
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {span: 0};
  }

  componentDidMount() {
    //event for knowing when the data is loaded
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  //a call back function that will be called after the image is loaded to set it's number of image's grid spans, which is the image height
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({span});
  };

  render() {
    // destructuring the prop.image
    const {urls, alt_description} = this.props.img;
    return (
      //rendering a single image card with all it's related data
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
