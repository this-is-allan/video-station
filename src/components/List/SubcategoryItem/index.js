import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "../../../store/ducks/subcategories";
import axios from "axios";

class SubcategoryItem extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    const token = "e0e6e2967dde85c9b0c604989ae1af47";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(
        `https://api.vimeo.com/categories/music/subcategories/musicdocumentary/videos?per_page=4`
      )
      .then(res => this.setState({ videos: res.data.data }));
  }

  render() {
    const {
      subcategory,
      activeSubcategory,
      toggleSubcategory,
      toggleVideo,
      activeVideo
    } = this.props;

    // console.log("console", this.props.activeVideo);

    return (
      <li style={{ color: subcategory.name === activeSubcategory && "red" }}>
        {subcategory.name}{" "}
        {/* <button onClick={() => toggleSubcategory(subcategory.name)}>
          assistir
        </button> */}
        <ul>
          {this.state.videos.map((video, i) => (
            <li key={i}>
              {video.name}{" "}
              <button onClick={() => toggleVideo(video)}>Assistir</button>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

const mapStateToProps = ({ subcategories }) => ({
  subcategories: subcategories.data,
  loading: subcategories.loading,
  activeSubcategory: subcategories.activeSubcategory,
  activeVideo: subcategories.activeVideo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SubcategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubcategoryItem);
