import test from 'tape';
import env from '../../backend/env/development-env';
import fetch from '../helpers/fetch-test-helper';
import {
  auth,
  categoryFindOneId,
  categoryDeleteId,
  categoryUpdateId
} from '../seed/insert-seed';


const COLLECTION = 'categories';
const AUTH = `?token=${auth.token}&_id=${auth._id}`;
const API_URL = `${env.baseURL}/api/v01/`;


test('categories controller:', assert => {
  fetch({
    method: 'post',
    url   : `${API_URL}${COLLECTION}/${AUTH}`,
    data: {
      title : 'What a category',
      status: 'active',
      color : 'pink'
    },
    assert: (response) => {
      assert.deepEquals(response.data.result.title, 'What a category',
        'Create a new category');
    }
  });


  fetch({
    method: 'get',
    url   : `${API_URL}${COLLECTION}/${AUTH}`,
    assert: (response) => {
      assert.ok(response.data.success,
        'Find all categories');
    }
  });


  fetch({
    method: 'get',
    url   : `${API_URL}${COLLECTION}/${categoryFindOneId}${AUTH}`,
    assert: (response) => {
      assert.deepEquals(response.data.result.title, 'cat1',
        'Finds one category');
    }
  });

  fetch({
    method: 'put',
    url   : `${API_URL}${COLLECTION}/${categoryUpdateId}${AUTH}`,
    data: { title: 'Awesome category' },
    assert: (response) => {
      assert.ok(response.data.success,
        'Updates an category');
    }
  });


  fetch({
    method: 'delete',
    url   : `${API_URL}${COLLECTION}/${categoryDeleteId}${AUTH}`,
    assert: (response) => {
      assert.ok(response.data.success,
        'Delete an category');
    }
  });


  assert.end();

});
