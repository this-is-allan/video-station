import styled from "styled-components";

export const VideoContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  flex: 1 1 0%;
  position: relative;
  padding-bottom: 56.2%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  background: rgb(32, 30, 41);
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;
