import test from 'tape';
import env from '../../../env/development-env';
import fetch from '../../../helpers/fetch-test-helper';
import { notesMock } from './note-mocks';

import axios from 'axios';

test.skip('Note controller', nested => {
  nested.test ('notesFind: ', assert=> {
    const query = {
      query:`
      {
        notesFind {
          _id
          created
          flag
          note
          updated
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
        const actaul =response.data.notesFind;
        const expect = notesMock;

        assert.deepEquals(actaul, expect,
          'Find all notes');
      }
    });

    assert.end();
  });


  nested.test ('noteFindOne: ', assert=> {
    const query = {
      query:`
      {
        noteFindOne {
          _id
          created
          flag
          note
          updated
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
        const actaul =response.data.noteFindOne;
        const expect = notesMock[0];

        assert.deepEquals(actaul, expect,
          'Find one note only');
      }
    });

    assert.end();
  });


  nested.test ('noteFindById: ', assert=> {
    const query = {
      query:`
      {
        noteFindById (_id: "563fa9dd007093486f3052n1") {
          _id
          created
          flag
          note
          updated
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
        const actaul = response.data.noteFindById;
        const expect = notesMock[0];

        assert.deepEquals(actaul, expect,
          'Find an note by id');
      }
    });

    assert.end();
  });
});
