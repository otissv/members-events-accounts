import test from 'tape';
import env from '../../backend/env/development-env';
import fetch from '../helpers/fetch-test-helper';


const ROOT_URL = env.baseURL;
const API_URL = `${ROOT_URL}/api/v01/`;


test('Auth controller:', assert => {
  fetch({
    method: 'get',
    url   : ROOT_URL,
    assert: (response) => {
      assert.deepEquals(response.status, 403,
        'Route is forbidden.');
    }
  });


  fetch({
    method: 'post',
    url   : `${API_URL}register`,
    assert (response) {
      assert.notOk(response.data.success,
        'Cannot register user with incorrect detils.');
    }
  });


  fetch({
    method: 'post',
    url : `${API_URL}register`,
    data: {
      username: 'otis',
      password: 'xyz'
    },
    assert (response) {
      assert.ok(response.data.success,
        'User can be registered.');
    }
  });


  fetch({
    method: 'post',
    url:   `${API_URL}authenticate`,
    data: {
      username: 'ania',
      password: 'xyz'
    },
    assert (response) {
      assert.ok(response.data.success,
      'Authenticate user.');
    }
  });

  // fetch({
  //   method: 'post',
  //   url:   `${API_URL}unauthenticate`,
  //   data: {
  //     username: 'a',
  //     password: 'xyz'
  //   },
  //   assert (response) {
  //     assert.deepEquals(response.data, true,
  //       'Unauthenticate user.');
  //   }
  // });

  assert.end();
});
