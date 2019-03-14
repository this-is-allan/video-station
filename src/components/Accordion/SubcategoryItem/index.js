import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "../../../store/ducks/subcategories";
import axios from "axios";

import { ToggleButton, Collapse } from "./styles";

class SubcategoryItem extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    const { subcategory, toggleVideo, index } = this.props;
    const subcategory_name = subcategory.uri.split("/").slice(-1)[0];
    const token = "e0e6e2967dde85c9b0c604989ae1af47";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(
        `https://api.vimeo.com/categories/documentary/subcategories/${subcategory_name}/videos?per_page=4`
      )
      // .then(res => this.setState({ videos: res.data.data }));
      .then(res => {
        this.setState({ videos: res.data.data });
        index === 0 && toggleVideo(res.data.data[0]);
      });
  }

  render() {
    const {
      subcategory,
      activeSubcategory,
      toggleSubcategory,
      toggleVideo,
      activeVideo,
      index
    } = this.props;

    return (
      <section
        style={{ listStyle: "none" }}
        onClick={() => toggleSubcategory(subcategory.name)}
      >
        <ToggleButton>
          {index + 1}. {subcategory.name}
        </ToggleButton>
        <li style={{ color: subcategory.name === activeSubcategory && "red" }}>
          <Collapse active={subcategory.name === activeSubcategory}>
            {this.state.videos.map((video, i) => (
              <li key={i} onClick={() => toggleVideo(video)}>
                {video.name}
              </li>
            ))}
          </Collapse>
        </li>
      </section>
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
