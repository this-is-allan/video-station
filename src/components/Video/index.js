import React, { Component } from "react";
import { BarLoader } from "react-spinners";
import { connect } from "react-redux";
import Vimeo from "@u-wave/react-vimeo";

import { VideoContainer, VideoHeader, VideoDescription } from "./styles";

class Video extends Component {
  state = {
    videoLoaded: false
  };

  render() {
    const { activeVideo } = this.props;
    const { videoLoaded } = this.state;
    const { link } = activeVideo;

    return (
      <VideoContainer>
        <BarLoader
          widthUnit="%"
          width={100}
          color="#8D6FF7"
          loading={!videoLoaded}
        />
        <VideoHeader>{activeVideo.name}</VideoHeader>
        {link && (
          <Vimeo
            video={link}
            width={640}
            height={480}
            onLoaded={() => this.setState({ videoLoaded: true })}
          />
        )}
        <VideoDescription>{activeVideo.description}</VideoDescription>
      </VideoContainer>
    );
  }
}

const mapStateToProps = ({ subcategories }) => ({
  activeVideo: subcategories.activeVideo,
  loading: subcategories.loading
});

export default connect(mapStateToProps)(Video);
