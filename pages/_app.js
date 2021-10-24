/* eslint-disable react/jsx-filename-extension */
import '../styles/globals.css';
import PropTypes from 'prop-types';
import '../views/Home/Home.css';

function MyApp({ Component, pageProps }) {
  const { View } = Component;
  return (
    <View {...pageProps} />
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
