import { Navigation } from 'react-native-navigation';

export default (mensagem) => {
  Navigation.showLightBox({
    screen: 'Notificacao',
    passProps: {
      texto: mensagem
    }
  });
}
