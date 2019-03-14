import React from "react";
import { connect } from "react-redux";
import Vimeo from "@u-wave/react-vimeo";

import { VideoContainer, VideoHeader, VideoDescription } from "./styles";

const Video = ({ activeVideo }) => {
  const { link } = activeVideo;

  return (
    <VideoContainer>
      <VideoHeader>{activeVideo.name}</VideoHeader>
      {link && <Vimeo video={link} width={640} height={480} />}
      <VideoDescription>{activeVideo.description}</VideoDescription>
    </VideoContainer>
  );
};

const mapStateToProps = ({ subcategories }) => ({
  activeVideo: subcategories.activeVideo
});

export default connect(mapStateToProps)(Video);
