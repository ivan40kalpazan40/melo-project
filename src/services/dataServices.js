import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const addArtist = async (id, title, thumb, cover_image, type) => {
  const docRef = await addDoc(collection(db, 'artists'), {
    id, title, thumb, cover_image, type
  });

  console.log('Document written with ID: ', docRef.id);
  return docRef;
};
