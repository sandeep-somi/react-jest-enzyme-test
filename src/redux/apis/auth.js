import { apiPost, apiGet, apiDelete } from '../utils';

export function loginAPI(user) {
  return apiPost('/api/v1/mgmt/session', user);
}