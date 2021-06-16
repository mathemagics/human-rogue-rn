import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';

import {
  ModalStackNavigationProp,
  ModalStackProps,
} from '/component/navigator/ModalStack';

export type BottomTabsScreens = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

export type BottomTabsNavigationProp<T extends keyof BottomTabsScreens> =
  CompositeNavigationProp<
    StackNavigationProp<BottomTabsScreens, T>,
    ModalStackNavigationProp
  >;

export type Props = ModalStackProps<'BottomTabs'>;
