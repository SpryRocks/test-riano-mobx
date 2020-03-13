import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

interface AppLoadingProps {
  startAsync: () => Promise<void>;
  onFinish?: () => void;
  onError?: (error: Error) => void;
}

const AppLoading: React.FC<AppLoadingProps> = ({startAsync, onFinish, onError}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    _startLoadingAppResourcesAsync().catch((error) => {
      console.error(`AppLoading threw an unexpected error when loading:\n${error.stack}`);
    });
    return () => {
      SplashScreen.hide();
    };
  }, []);

  const _startLoadingAppResourcesAsync = async () => {
    if (!onFinish) {
      throw new Error('AppLoading onFinish prop is required if startAsync is provided');
    }
    try {
      await startAsync();
      if (onFinish) {
        onFinish();
      }
    } catch (e) {
      if (!isMounted) return;
      if (onError) {
        onError(e);
      } else {
        throw e;
      }
    }
  };
  return null;
};

export default AppLoading;
