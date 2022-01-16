import Header from './components/Header';
import MainContent from './components/MainContent';
import { useEffect, useState } from 'react';
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { collection, getFirestore, addDoc, query, where, orderBy, getDocs, onSnapshot } from '@firebase/firestore';



function App() {

  const [showAddForm, setShowAddForm] = useState(false);
  const [user, setUser] = useState({name: '', photoURL: ''})
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    initFirebaseAuth();
  }, []);

  useEffect(() => {



    onSnapshot(collection(getFirestore(), 'movies'), (snapshot) => {
      setMovies((snapshot.docs.map(doc => doc.data())))
    });
  }, [])

  const handleForm = () => {
    setShowAddForm(!showAddForm);
    console.log(showAddForm);
  }

  //Control values of movie form from App state
  const handleChange = (e) => {
    const {name} = e.target;
    setMovie({...movie, [name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = getAuth().currentUser.uid;
    setMovie({...movie, user: uid});
    handleForm();
    try{
      await addDoc(collection(getFirestore(), 'movies'), {
        ...movie
      });
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }


//Signs the user in
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

//Signs the user out
  const signOutUser = () =>  {
    signOut(getAuth());
  };

    //Initiate firebase auth
  const initFirebaseAuth = () => {
      //Listen to auth state changes
      onAuthStateChanged(getAuth(), authStateObserver);
    }

  const getUserName = () => {
    return getAuth().currentUser.displayName;
  }

  const getProfilePicUrl = () => {
    return getAuth().currentUser.photoURL || './images/user.png';
  }

const authStateObserver = (user) => {
    if (user) {
      setUser({name: getUserName(),  photoURL: getProfilePicUrl()});
    } else {
      setUser({name: '', photoURL: ''});
    }
  }

  return (
    <div className="App">
      <Header
        handleSignIn={signIn}
        handleSignOut={signOutUser}
        user={user}
        handleForm={handleForm}
      />
      <MainContent
        showForm={showAddForm}
        movie={movie}
        movies={movies}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
