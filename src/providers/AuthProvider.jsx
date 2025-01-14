import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "../context/AuthContext";
import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import LoadingSpinner from "../Components/shared/LoadingSpinner/LoadingSpinner";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // log out
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer from firebase
  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("CurrentUser-->", currentUser.email);
        setLoading(false);
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // if loading show spinner
  if (loading) {
    return <LoadingSpinner />;
  }
  // props
  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
