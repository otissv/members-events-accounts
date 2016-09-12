import test from 'tape';
import env from '../../../env/development-env';
import fetch from '../../../helpers/fetch-test-helper';
import { usersMock } from './user-mocks';

import axios from 'axios';

test.skip('Users controller', nested => {
  nested.test ('userFindOne method: ', assert=> {
    const query = {
      query:`
      {
        userFindOne {
          _id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          username
          addresses {
          _id
          }
          notes {
            _id
          }
          createdBy {
            _id
          }
          updatedBy {
            _id
          }
        }
      }`
    };


    fetch({
      method: 'post',
      url   : `http://localhost:5002/graphql`,
      data: query,
      assert: (response) => {
        const actaul =response.data.userFindOne;
        const expect = usersMock[0];

        assert.deepEquals(actaul, expect,
          'Find one user only');
      }
    });

    assert.end();
  });


  nested.test ('userFindById method: ', assert=> {
    const query = {
      query:`
      {
          userFindById (_id: "563fa9dd007093486f3052a5") {
          _id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          username
          addresses {
          _id
          }
          notes {
            _id
          }
          createdBy {
            _id
          }
          updatedBy {
            _id
          }
        }
      }`
    };

    fetch({
      method: 'post',
      url   : `http://localhost:5002/graphql`,
      data: query,
      assert: (response) => {
        const actaul =response.data.userFindById;
        const expect = usersMock[0];
        console.log();
        assert.deepEquals(actaul, expect,
          'Finds a user by id');
      }
    });

    assert.end();
  });
});
