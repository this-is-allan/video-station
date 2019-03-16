import React, { Component } from "react";
import { BarLoader } from "react-spinners";
import { connect } from "react-redux";
import Vimeo from "@u-wave/react-vimeo";

import { VideoContainer, VideoHeader, VideoDescription } from "./styles";

class Video extends Component {
  state = {
    videoLoaded: false,
    videoError: false
  };

  render() {
    const { activeVideo } = this.props;
    const { videoLoaded, videoError } = this.state;
    const { link } = activeVideo;

    return (
      <VideoContainer>
        <BarLoader
          widthUnit="%"
          width={100}
          color="#8D6FF7"
          loading={!videoLoaded}
        />

        {!videoError ? (
          <VideoHeader>{activeVideo.name}</VideoHeader>
        ) : (
          <React.Fragment>
            <VideoHeader>Error: Video can not load</VideoHeader>
          </React.Fragment>
        )}

        {link && (
          <Vimeo
            video={link}
            width={640}
            height={480}
            onReady={() => this.setState({ videoLoaded: true })}
            onError={() => this.setState({ videoError: true })}
            onLoaded={() => this.setState({ videoError: false })}
          />
        )}
        <VideoDescription>
          {!videoError && activeVideo.description}
        </VideoDescription>
      </VideoContainer>
    );
  }
}

const mapStateToProps = ({ subcategories }) => ({
  activeVideo: subcategories.activeVideo,
  loading: subcategories.loading
});

export default connect(mapStateToProps)(Video);
