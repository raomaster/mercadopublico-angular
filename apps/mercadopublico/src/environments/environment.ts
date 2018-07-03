// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currency: {
    token: 'af037fa2d0c94318930b432fc2704f56',
    baseUrl: 'https://openexchangerates.org/api/historical/'
  },
  firebase: {
    apiKey: 'AIzaSyDIQglX_XzCoJfTnVPjGES54IATnSd6btk',
    authDomain: 'mercadopublico-8dcc7.firebaseapp.com',
    databaseURL: 'https://mercadopublico-8dcc7.firebaseio.com',
    projectId: 'mercadopublico-8dcc7',
    storageBucket: 'mercadopublico-8dcc7.appspot.com',
    messagingSenderId: '302274680042'
  },
  mercadoPublico: {
    token: '47B7E7D3-5466-4459-B826-5A6FE8A4C520',
    baseUrl: 'http://api.mercadopublico.cl/servicios/v1/publico/'
  },
  sbif: {
    token: 'aa978da4dc1db427283227cd1603a81ddc91db11',
    baseUrl: 'https://api.sbif.cl/api-sbifv3/recursos_api/'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
