import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';

export const comparePass = (password, confirmPassword) =>
  password === confirmPassword;

export const register = async (email, password, confirmPassword) => {
  const isConfirmed = comparePass(password, confirmPassword);
  if (!isConfirmed) {
    throw new Error('You must confirm your password');
  }
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
