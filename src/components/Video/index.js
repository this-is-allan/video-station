import React from "react";
import { connect } from "react-redux";
import { VideoContainer } from "./styles";
import Vimeo from "@u-wave/react-vimeo";

const Video = ({ activeVideo }) => {
  // if (activeVideo.uri) {
  const uri =
    activeVideo.uri &&
    activeVideo.uri.substr(activeVideo.uri.lastIndexOf("/") + 1);
  // }
  return (
    <VideoContainer>
      {uri && <Vimeo video={uri} width={640} height={480} autoplay />}
    </VideoContainer>
  );
};

const mapStateToProps = ({ subcategories }) => ({
  activeVideo: subcategories.activeVideo
});

export default connect(mapStateToProps)(Video);
