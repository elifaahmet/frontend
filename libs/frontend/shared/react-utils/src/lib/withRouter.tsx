/** @format **/
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (templateUrl = '') => (Component: React.FC) => (
  props
) => {
  const { country } = props;
  const [basename, setBasename] = React.useState(templateUrl);
  React.useEffect(() => {
    if (country === 'MX') {
      setBasename(`/mx/${templateUrl}`);
    } else {
      setBasename(`/${templateUrl}`);
    }
  }, [country]);

  return (
    <BrowserRouter basename={basename}>
      <Component {...props} />
    </BrowserRouter>
  );
};
