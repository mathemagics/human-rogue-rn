import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import BottomTabs from '/component/navigator/BottomTabs';

import { ModalStackScreens, Props } from './ModalStack.types';

const { Navigator, Screen } = createStackNavigator<ModalStackScreens>();

const _fullScreenModalOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  gestureDirection: 'vertical',
  headerShown: false,
} as const;

/**
 * ModalStack is used for screens/stacks that need to be presented modally
 * outside of the BottomTabs ("on top"/"in front" of them), and take up the
 * entire viewport. These screens generally either slide in from a direction,
 * or fade/zoom in.
 */

const bottomTabsOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
  headerShown: false,
};

const ModalStack: React.FC<Props> = () => {
  return (
    <Navigator headerMode="screen" initialRouteName="Onboarding" mode="modal">
      <Screen
        component={BottomTabs}
        name="BottomTabs"
        options={bottomTabsOptions}
      />
    </Navigator>
  );
};

export default ModalStack;
