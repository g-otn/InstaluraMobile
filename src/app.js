/**
 * InstaluraMobile
 * https://github.com/rafael-rollo/InstaluraMobile
 */

import { Navigation } from 'react-native-navigation';
import Login from './components/Login';
import Feed from './components/Feed';

export default () => {
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('Feed', () => Feed);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Login',
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
}
