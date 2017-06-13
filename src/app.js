/**
 * InstaluraMobile
 * https://github.com/rafael-rollo/InstaluraMobile
 */

import { Navigation } from 'react-native-navigation';
import Login from './screens/Login';
import Timeline from './screens/Timeline';
import PerfilUsuario from './screens/PerfilUsuario';
import Notificacao from './screens/Notificacao';

export default () => {
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('Timeline', () => Timeline);
  Navigation.registerComponent('PerfilUsuario', () => PerfilUsuario);
  Navigation.registerComponent('Notificacao', () => Notificacao);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Login',
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
}
