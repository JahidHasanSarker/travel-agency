import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import authInit from '../Component/Login/firebase/firebase.init';


authInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setLoading(false)
        });
        return () => unsubscribe();
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut,
        loading, 
        setLoading
    }
}

export default useFirebase;
authInit();