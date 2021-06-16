import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationProvider from '/provider/NavigationProvider';

import CardStack from '/component/navigator/CardStack';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationProvider>
        <CardStack />
      </NavigationProvider>
    </SafeAreaProvider>
  );
};

export default App;
