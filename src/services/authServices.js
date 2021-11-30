import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
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
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const signoutResult = await signOut(auth);
    return signoutResult;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
