import { StyleSheet } from 'react-native';
import { color } from '/theme';
const buttonSize = 48;

export default StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bar: {
    height: 72,
    paddingHorizontal: 24,
    backgroundColor: color.backgroundSecondary,
    borderRadius: 72 / 2,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    height: buttonSize,
    justifyContent: 'center',
    minWidth: 2 * buttonSize,
    borderRadius: 24,
  },
  active: {
    backgroundColor: color.backgroundPrimary,
  },
  buttonText: {
    color: color.textPrimary,
  },
});
