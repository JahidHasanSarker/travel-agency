import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Component/Login/firebase/firebase.init";

authInit();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState('');
    const [isLogin, setIsLogin]= useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setError('');

            })
            .catch(error=>{
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const toggolLogin = e =>{
        setIsLogin(e.target.checked);
    }
    
    const handleNameChange = e => {
        setName(e.target.value);
      }
    
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleregister = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password must be 6 charecter long')
            return;
        }
           
        isLogin? processLogin(email, password):  createNewUser(email, password);
    }
    
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            setUserName();
        })
        .catch(error=> {
            setError(error.message)
        }) 
    }



    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [auth, isLoading])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    return {
        user, setUser,
        googleSignIn,
        isLoading,
        toggolLogin,
        isLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleregister,
        error,
        logOut

    }

};

export default useFirebase;