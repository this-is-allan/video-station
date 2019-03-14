import React from "react";
import { connect } from "react-redux";
import Vimeo from "@u-wave/react-vimeo";

import { VideoContainer, VideoHeader } from "./styles";

const Video = ({ activeVideo }) => {
  // const uri =
  //   activeVideo.uri &&
  //   activeVideo.uri.substr(activeVideo.uri.lastIndexOf("/") + 1);

  const { link } = activeVideo;

  return (
    <VideoContainer>
      <VideoHeader>{activeVideo.name}</VideoHeader>
      {/* <Vimeo video="https://vimeo.com/313281415" /> */}
      {link && <Vimeo video={link} width={640} height={480} />}
    </VideoContainer>
  );
};

const mapStateToProps = ({ subcategories }) => ({
  activeVideo: subcategories.activeVideo
});

export default connect(mapStateToProps)(Video);
