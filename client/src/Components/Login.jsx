import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/User";

export default function Login() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([
    {
      username: "Jordan",
      avatarUrl:
        "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
    },
    {
      username: "Rachel",
      avatarUrl:
        "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
    },
    {
      username: "Salah",
      avatarUrl:
        "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
    },
    {
      username: "Hannah",
      avatarUrl:
        "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
    },
    {
      username: "Zack",
      avatarUrl:
        "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cute-round-avatar-smiley-face-image_1245552.jpg",
    },
  ]);
  let navigate = useNavigate();
  return (
    <section>
      <ul>
        {allUsers.map((profile) => {
          return (
            <li key={profile.username}>
              <h3>{profile.username}</h3>
              <img
                src={profile.avatarUrl}
                alt={profile.username}
                className="login-avatar"
              ></img>
              <p>
                <button
                  onClick={(event) => {
                    setCurrentUser(profile);
                    navigate("./chat");
                  }}
                >
                  Login
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
