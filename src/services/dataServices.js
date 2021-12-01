import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const addArtist = async (id, title, thumb, cover_image, type) => {
  const docRef = await addDoc(collection(db, 'artists'), {
    id,
    title,
    thumb,
    cover_image,
    type,
    addedOn: Timestamp.now().toDate(),
  });

  console.log('Document written with ID: ', docRef.id);
  return docRef;
};
