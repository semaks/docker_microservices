import angular from 'angular';
import mocks from 'angular-mocks';

let context = require.context('./src/app', true, /\.test\.js/);

context.keys().forEach(context);