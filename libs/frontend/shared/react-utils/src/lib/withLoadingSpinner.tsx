/** @format **/
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;

  border-top: 8px solid white;
  border-right: 8px solid white;
  border-bottom: 8px solid white;
  border-left: 16px solid gray;
  background: transparent;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  position: relative;
`;

export const withLoadingSpinner = (Component: React.FC) => (props) => {
  const [showSpinner, setShowSpinner] = React.useState(false);
  return (
    <>
      <Component {...props} setShowSpinner={setShowSpinner} />
      {showSpinner && <Spinner />}
    </>
  );
};
