import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const HamburgerIcon = ({ navigation }) => {
  return (
    <View>
      <Text>HamburgerIcon</Text>
    </View>
  );
};

HamburgerIcon.propTypes = {
  navigation: PropTypes.object,
};

export default HamburgerIcon;
