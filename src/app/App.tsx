import AppLoading from './AppLoading';
import * as React from 'react';
import {useState} from 'react';
import AppInitializer from './AppInitializer';
import Router from "screens/Router";

const App: React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={AppInitializer.initAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Router/>
  );
};

export default App;
