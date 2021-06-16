import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './TabBar.styles';

export const TabBar = ({
  state,
  navigation,
}: BottomTabBarProps): JSX.Element => {
  const onPress = (index: number) => () => {
    const route = state.routes[index];

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (state.index !== index && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = (index: number) => () => {
    const route = state.routes[index];

    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  // NOTE: For a floating/transparent tab bar where you can't use flexbox, the
  // height can be grabbed by adding an `onLayout` handler to the root element:
  //
  // const handleRootLayout = (e: LayoutChangeEvent) => {
  //   e.nativeEvent.layout.height;
  // };

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.root}>
      <View style={styles.bar}>
        {[
          {
            title: 'Tab1',
          } as const,
          {
            title: 'Tab2',
          } as const,
          {
            title: 'Tab3',
          } as const,
        ].map(({ title }, i) => {
          return (
            <Pressable
              key={title}
              onLongPress={onLongPress(i)}
              onPress={onPress(i)}
              style={[styles.button, state.index === i && styles.active]}
            >
              <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
