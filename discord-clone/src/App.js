import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Chat from "../src/components/Chat"
// import { selectUser } from "./features/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import Login from "./components/Login";
// import { auth } from "./firebase";
// import { login, logout } from "./features/userSlice";

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  // the user is logged in
  //       dispatch(
  //         login({
  //           uid: authUser.uid,
  //           photo: authUser.photoURL,
  //           email: authUser.email,
  //           displayName: authUser.displayName,
  //         })
  //       );
  //     } else {
  //       // the user is logged out
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;