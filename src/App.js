import Header from './components/Header';
import MainContent from './components/MainContent';
import { useEffect, useState } from 'react';
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';


function App() {

  const [showAddForm, setShowAddForm] = useState(false);
  const [user, setUser] = useState({name: '', photoURL: ''})

  useEffect(() => {
    initFirebaseAuth();
  }, []);

  const handleForm = () => {
    setShowAddForm(!showAddForm);
    console.log(showAddForm);
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
      <Header handleSignIn={signIn} handleSignOut={signOutUser} user={user} handleForm={handleForm} />
      <MainContent showForm={showAddForm} />
    </div>
  );
}

export default App;
