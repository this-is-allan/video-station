import styled from "styled-components";

export const VideoContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  flex: 1 1 0%;
  position: relative;
  overflow: hidden;
  background: rgb(32, 30, 41);
  iframe {
    padding: 0 40px;
    /* position: absolute; */
    top: 0;
    /* left: 0; */
    width: 65vw;
    /* height: 100vh; */
    html {
      body {
        background: red !important;
        display: block !important;
      }
    }
  }
`;

export const VideoHeader = styled.h1`
  padding: 20px 40px;
  /* margin-bottom: 20px; */
  /* height: 0; */
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  color: rgb(255, 255, 255);
`;
