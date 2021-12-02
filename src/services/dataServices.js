import {
  collection,
  addDoc,
  setDoc,
  getDoc,
  query,
  Timestamp,
  doc,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const addArtist = async (id, title, thumb, cover_image, type, uid) => {
  const docRef = await setDoc(doc(db, 'artists', `${id}`), {
    title,
    thumb,
    cover_image,
    type,
    uid: [uid],
    addedOn: Timestamp.now().toDate(),
  });

  return docRef;
};

export const getArtist = async (uid, id) => {
  const docRef = doc(db, 'artists', `${id}`);
  const snapShot = await getDoc(docRef);
  if (snapShot.exists()) {
    return snapShot.data();
  } else {
    throw new Error('Artist Not Found');
  }
};
