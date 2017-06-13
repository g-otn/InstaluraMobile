import { ToastAndroid } from 'react-native';

export default (mensagem) => {
  ToastAndroid.show(mensagem, ToastAndroid.SHORT);
}
