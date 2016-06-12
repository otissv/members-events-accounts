import redis from 'redis';
import { auth } from '../seed/insert-seed';


function reset () {
  const client = redis.createClient();
  client.flushall();
  client.hset(`users:${auth._id}`, 'token', auth.token);

  client.quit();
}


export default {
  reset
};
