// Modules
import React, { useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import { Props } from './NavigationProvider.types';

const NavigationProvider = ({ children }: Props): JSX.Element => {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef = useRef<NavigationContainerRef | null>(null);

  const handleNavigationOnReady = async () => {
    const initialScreenName =
      navigationRef.current?.getCurrentRoute()?.name || '';
    routeNameRef.current = initialScreenName;
  };

  const handleNavigationStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName =
      navigationRef.current?.getCurrentRoute()?.name || '';

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleNavigationOnReady}
      onStateChange={handleNavigationStateChange}
    >
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
