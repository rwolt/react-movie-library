import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  getFirestore,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from "@firebase/firestore";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [user, setUser] = useState({ name: "", photoURL: "", uid: "" });
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    initFirebaseAuth();
  }, []);

  useEffect(() => {
    //If the user is authenticated
    if(!!getAuth().currentUser) {
      //Get movies for the current user
      const q = query(
        collection(getFirestore(), "movies"),
        where("uid", "==", getAuth().currentUser.uid)
      );
      //Set the current state of movies to the snapshot of the movies collection
      onSnapshot(q, (snapshot) => {
        setMovies(snapshot.docs.map((doc) => doc.data()));
      });
    } else {
      //If not authenticated, the library is empty
      setMovies([]);
    }
  }, [user]);

  const handleForm = () => {
    setShowAddForm(!showAddForm);
  };

  //Control values of movie form from App state
  const handleChange = (e) => {
    const { name } = e.target;
    setMovie({ ...movie, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleForm();
    try {
      await addDoc(collection(getFirestore(), "movies"), {
        ...movie, uid: user.uid
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
    setMovie({});
  };

  //Signs the user in
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  //Signs the user out
  const signOutUser = () => {
    signOut(getAuth());
  };

  //Initiate firebase auth
  const initFirebaseAuth = () => {
    //Listen to auth state changes
    onAuthStateChanged(getAuth(), authStateObserver);
  };

  const getUserName = () => {
    return getAuth().currentUser.displayName;
  };

  const getProfilePicUrl = () => {
    return getAuth().currentUser.photoURL || "./images/user.png";
  };

  const getUserId = () => {
    return getAuth().currentUser.uid;
  }

  const authStateObserver = (user) => {
    if (user) {
      setUser({ name: getUserName(), photoURL: getProfilePicUrl(), uid: getUserId()});
    } else {
      setUser({ name: "", photoURL: "", uid: ""});
    
    };
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
