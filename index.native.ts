import { AppRegistry, Platform } from 'react-native';

import App from './src/App';

const appName = 'client';

AppRegistry.registerComponent(appName, () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
