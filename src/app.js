/**
 * InstaluraMobile
 * https://github.com/rafael-rollo/InstaluraMobile
 */

import { AppRegistry } from 'react-native';
import Feed from './components/Feed';
import Login from './components/Login';

export default () => {
  AppRegistry.registerComponent('InstaluraMobile', () => Login);
}
