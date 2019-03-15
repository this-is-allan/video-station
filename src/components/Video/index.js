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
    const { activeVideo, loading } = this.props;
    const { videoLoaded } = this.state;
    const { link } = activeVideo;

    return (
      <VideoContainer>
        <BarLoader width="100%" color={"#123abc"} loading={!videoLoaded} />
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

// const Video = ({ activeVideo, loading }) => {
//   const { link } = activeVideo;

//   return (
//     <VideoContainer>
//       <BarLoader width="100%" color={"#123abc"} loading={loading} />
//       <VideoHeader>{activeVideo.name}</VideoHeader>
//       {link && <Vimeo video={link} width={640} height={480} />}
//       <VideoDescription>{activeVideo.description}</VideoDescription>
//     </VideoContainer>
//   );
// };

const mapStateToProps = ({ subcategories }) => ({
  activeVideo: subcategories.activeVideo,
  loading: subcategories.loading
});

export default connect(mapStateToProps)(Video);
