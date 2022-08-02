import { useContext, useState } from "react";
import { UserContext } from "../Contexts/User";

export default function ChatPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isLoggedIn, SetIsLoggedIn] = useState();
  return (
    <header>
      <h1>MSN</h1>
    </header>
  );
}
