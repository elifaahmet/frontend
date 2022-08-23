/** @format **/
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { TopBar } from '@tend/lego/product-ui-kit';


export const withTopBar = (title) => (Component: React.FC) => (props) => {
  const navigate = useNavigate();
  const goBack = (e) => {
    e.preventDefault();

    navigate(-1);
  };
  return (
    <>
      <TopBar>
        <div onClick={goBack}>
          <span className="icon-Arrow-Left" style={{ fontSize: '2rem' }} />
        </div>
        <div style={{ justifySelf: 'center' }}>{title}</div>
      </TopBar>
      <Component {...props} />
    </>
  );
};

/**
 *
  .toolbar-background {

  }

 .toolbar-container {

  }

 */
