import React from 'react';
import PropTypes from 'prop-types';

import { WebView } from 'react-native-webview';

const Star = ({ navigation }) => {
  return (
    <WebView
      source={{ uri: navigation.state.params.star.html_url }}
      style={{ flex: 1 }}
    />
  );
};

Star.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.star.name,
});

Star.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};

export default Star;
