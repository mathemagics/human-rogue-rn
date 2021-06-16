import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import ModalStack from '/component/navigator/ModalStack';

import { CardStackScreens } from './CardStack.types';

const { Navigator, Screen } = createStackNavigator<CardStackScreens>();

/**
 * The CardStack is used for screens/stacks that need to be displayed modally
 * with an iOS card style. These cards slide up from the bottom of the screen
 * without reaching the top, and make the previous screen slightly shrink while
 * remaining visible.
 */
export default (): JSX.Element => {
  return (
    <Navigator
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
      }}
      initialRouteName="ModalStack"
    >
      <Screen
        component={ModalStack}
        name="ModalStack"
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
