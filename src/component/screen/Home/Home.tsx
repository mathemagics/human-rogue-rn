import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './Home.styles';
import { Props } from './Home.types';

const TodayHome: React.FC<Props> = ({ navigation: _navigation }) => {
  return (
    <SafeAreaView style={styles.root} edges={['top', 'right', 'left']}>
      <KeyboardAwareScrollView keyboardDismissMode="on-drag">
        <View style={styles.content}>
          <Text>Home</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default TodayHome;
