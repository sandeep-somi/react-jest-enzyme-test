import * as localStorage from './localstorage';
import * as axiosCall from './localstorage';
import * as helpers from './helpers';

export default {
  ...localStorage,
  ...axiosCall,
  ...helpers
}