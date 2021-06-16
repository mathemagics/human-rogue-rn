import { StyleSheet } from 'react-native';
import { color } from '/theme';

export default StyleSheet.create({
  content: {
    paddingBottom: 256,
  },
  root: {
    backgroundColor: color.backgroundPrimary,
    flex: 1,
    padding: 0,
  },
  text: {
    color: color.textPrimary,
  },
});
