import test from 'tape';
import env from '../../backend/env/development-env';
import fetch from '../helpers/fetch-test-helper';
import {
  auth,
  eventFindOneId,
  eventDeleteId,
  eventUpdateId
} from '../seed/insert-seed';


const COLLECTION = 'events';
const AUTH = `?token=${auth.token}&_id=${auth._id}`;
const API_URL = `${env.baseURL}/api/v01/`;


test('Events controller:', assert => {
  fetch({
    method: 'post',
    url   : `${API_URL}${COLLECTION}/${AUTH}`,
    data: {
      title      : 'What an event',
      start      : new Date(2016, 8, 6, 11, 0),
      end        : new Date(2016, 8, 6, 12, 0)
    },
    assert: (response) => {
      assert.deepEquals(response.data.result.title, 'What an event',
        'Create a new event');
    }
  });


  fetch({
    method: 'get',
    url   : `${API_URL}${COLLECTION}/${AUTH}`,
    assert: (response) => {
      assert.ok(response.data.success,
        'Find all events');
    }
  });


  fetch({
    method: 'get',
    url   : `${API_URL}${COLLECTION}/${eventFindOneId}${AUTH}`,
    assert: (response) => {
      assert.deepEquals(response.data.result.title, 'Event Number one',
        'Finds one event');
    }
  });

  fetch({
    method: 'put',
    url   : `${API_URL}${COLLECTION}/${eventUpdateId}${AUTH}`,
    data: { title: 'Awesome Event' },
    assert: (response) => {
      assert.ok(response.data.success,
        'Updates an event');
    }
  });


  fetch({
    method: 'delete',
    url   : `${API_URL}${COLLECTION}/${eventDeleteId}${AUTH}`,
    assert: (response) => {
      assert.ok(response.data.success,
        'Delete an event');
    }
  });


  assert.end();

});
