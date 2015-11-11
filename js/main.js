import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import ExploreController from './controllers/explore.controller';
import RegisterController from './controllers/register.controller';
import SignInController from './controllers/signIn.controller';
import UploadController from './controllers/upload.controller';
import UserController from './controllers/user.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ExploreController', ExploreController)
  .controller('RegisterController', RegisterController)
  .controller('SignInController', SignInController)
  .controller('UploadController', UploadController)
  .controller('UserController', UserController)
;