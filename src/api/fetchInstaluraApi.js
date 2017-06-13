import { AsyncStorage } from 'react-native';

export default (uri, metodo = 'GET', dados) => {
  const endereco = `http://localhost:8080/api${uri}`;

  return AsyncStorage.getItem('token')
    .then(token => {

      let requestInfo = {method: metodo};
      let headersHttp = {
        'X-AUTH-TOKEN': token
      }

      if(metodo === 'POST' && typeof dados == 'object') {
        headersHttp = {...headersHttp,
          'Content-type': 'application/json'
        };
        requestInfo.body = JSON.stringify(dados);
      }

      requestInfo.headers = new Headers(headersHttp);
      return requestInfo;
    })
    .then(requestInfo => fetch(endereco, requestInfo))
    .then(response => {
        if(response.ok)
          return response.json();

        throw 'Desculpe! Algo deu errado.'
    });
}
