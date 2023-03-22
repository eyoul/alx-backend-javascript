import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName){
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => values.map((value) => ({
    status: value.status,
    value: value.status === 'fulfilled' ? value.value : String(value.reason),
  })));
}
