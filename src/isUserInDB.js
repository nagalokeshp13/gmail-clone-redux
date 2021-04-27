import { db } from './firebase';

export default async function isUserInDB(user) {
  let user1 = user;
  console.log(user.email);

  let userFound = false;
  await db
    .collection('users')
    .where('email', '==', user.email)
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
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
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