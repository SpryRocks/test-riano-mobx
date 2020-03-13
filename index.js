import {AppRegistry, YellowBox} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

YellowBox.ignoreWarnings([
  'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use',
]);
