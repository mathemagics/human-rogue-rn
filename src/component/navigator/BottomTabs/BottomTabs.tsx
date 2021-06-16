import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '/component/screen/Home';
import { TabBar } from '/component/partial';

import { BottomTabsScreens } from './BottomTabs.types';

const Tab = createBottomTabNavigator<BottomTabsScreens>();

/**
 * BottomTabs contains screens/stacks that should live inside a "traditional"
 * tab bar navigation hierarchy. This is typically the home screen and other
 * primary sections of the app, such as a browse view or settings screens.
 */
export default (): JSX.Element => {
  return (
    <Tab.Navigator tabBar={(tabBarOpts) => <TabBar {...tabBarOpts} />}>
      <Tab.Screen name="Tab1" component={Home} />
      <Tab.Screen name="Tab2" component={Home} />
      <Tab.Screen name="Tab3" component={Home} />
    </Tab.Navigator>
  );
};
