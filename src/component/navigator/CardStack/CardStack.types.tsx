import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

import { ModalStackScreens } from '/component/navigator/ModalStack';

export type CardStackScreens = {
  ModalStack: NavigatorScreenParams<ModalStackScreens>;
};

export type CardStackRouteProp<T extends keyof CardStackScreens> = RouteProp<
  CardStackScreens,
  T
>;

export type CardStackNavigationProp<
  T extends keyof CardStackScreens = 'ModalStack',
> = StackNavigationProp<CardStackScreens, T>;

export type CardStackProps<T extends keyof CardStackScreens> = {
  navigation: CardStackNavigationProp<T>;
  route: CardStackRouteProp<T>;
};
