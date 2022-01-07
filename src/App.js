import Header from './components/Header';
import MainContent from './components/MainContent';
import { useEffect, useState } from 'react';
import './App.css';
import {db} from './utils/firebase';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import {addDoc, collection} from 'firebase/firestore';


function App() {

  const [showAddForm, setShowAddForm] = useState(false);
  const [user, setUser] = useState({name: '', photoURL: '', uid: null})
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    runtime: ''
  })

  useEffect(() => {
    initFirebaseAuth();
  }, []);

  const handleForm = () => {
    setShowAddForm(!showAddForm);
    console.log(showAddForm);
  }

  //On change, update state and pass values to controlled components
  const handleChange = (e) => {
    const {name} = e.target;
    setMovie( {
      ...movie, 
      [name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "movies"), {
      ...movie,
      uid: user.uid
    });
    //Clear the form and hide it
    setMovie({
      title: '',
      director: '',
      genre: '',
      runtime: ''
    });
    handleForm();
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

  const getUserID = () => {
    return getAuth().currentUser.uid;
  }

const authStateObserver = (user) => {
    if (user) {
      setUser({name: getUserName(),  photoURL: getProfilePicUrl(), uid: getUserID()});
    } else {
      setUser({name: '', photoURL: '', uid: null});
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
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        movie={movie} 
      />
    </div>
  );
}

export default App;
