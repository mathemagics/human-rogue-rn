import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import {
  CardStackNavigationProp,
  CardStackProps,
} from '/component/navigator/CardStack';

// TODO remove this type
import { Identity } from '/component/screen/Today/TodayHome/TodayHome.types';

export type ModalStackScreens = {
  BottomTabs: undefined;
  EditIdentity: { identity: Identity };
  EditMissTake: { identity: Identity };
  Onboarding: undefined;
  Compass: undefined;
  Storybook: undefined;
  Morning: undefined;
};

export type ModalStackRouteProp<T extends keyof ModalStackScreens> = RouteProp<
  ModalStackScreens,
  T
>;

export type ModalStackNavigationProp<
  T extends keyof ModalStackScreens = 'BottomTabs'
> = CompositeNavigationProp<
  StackNavigationProp<ModalStackScreens, T>,
  CardStackNavigationProp
>;

export type ModalStackProps<T extends keyof ModalStackScreens> = {
  navigation: ModalStackNavigationProp<T>;
  route: ModalStackRouteProp<T>;
};

export type Props = CardStackProps<'ModalStack'>;
