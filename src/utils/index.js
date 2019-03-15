import * as localStorage from './localstorage';
import * as axiosHelpers from './axiosHelpers';
import * as helpers from './helpers';

export default {
  ...localStorage,
  ...axiosHelpers,
  ...helpers
}