import { React, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./index.css";
// import Home from "./Home/Home";
// import ChatRoom from "./ChatRoom/ChatRoom";
import Header from "./Components/Header";
import { UserContext } from "./Contexts/User";
import Login from "./Components/Login";
import ChatPage from "./Components/ChatPage";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatarUrl: "",
  });
  return (
    <BrowserRouter>
      <div className="app">
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/chat" element={<ChatPage />} />
            {/* <Route exact path="/profile" component={ProfilePage} /> */}
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
