import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import ExploreController from './controllers/explore.controller';
import RegisterController from './controllers/register.controller';
import SignInController from './controllers/signIn.controller';
import UploadController from './controllers/upload.controller';
import UserController from './controllers/user.controller';
import LogOutController from './controllers/logout.controller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'mdglKarlt2mNMLydQkIsP6cDMJMQiszcRUrxLqkd',
        'X-Parse-REST-API-Key': 'tRuPjdevHeUJT6biDyeadniIR4L8SHp5RAuYwJJy'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ExploreController', ExploreController)
  .controller('RegisterController', RegisterController)
  .controller('SignInController', SignInController)
  .controller('UploadController', UploadController)
  .controller('UserController', UserController)
  .controller('LogOutController', LogOutController)
;