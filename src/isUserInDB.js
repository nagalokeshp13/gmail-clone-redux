import { db } from './firebase';

export default async function isUserInDB(toUser) {
  let user1 = toUser;
  console.log(toUser.email);

  let userFound = false;
  await db
    .collection('users')
    .where('email', '==', toUser.email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        userFound = true;
        user1 = doc.data();
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });

  console.log(userFound ? 'user found in db' : 'adding user to db...');
  if (userFound === false) {
    db.collection('users').add({
      displayName: toUser.displayName,
      email: toUser.email,
      photoUrl: toUser.photoURL,
    });
  }

  // console.log(user1);
  return user1;
}

// const user1 = {
//   displayName: 'lokesh',
//   email: 'lokesh@email',
//   photoURL: 'imgurl',
// };

// isUserInDB(user1);
