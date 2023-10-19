import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { updateProfile, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { login } from "./features/user/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      dispatch(
        login({
          email: userCredential.email,
          uid: userCredential.uid,
          displayName: userCredential.displayName,
          photoURL: userCredential.photoURL,
        })
      );
    }).catch((error) => alert(error));
  };

  const dispatch = useDispatch();

  const handleRegistration = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: profile,
        });
      })
      .then(() => {
        dispatch(
          login({
            email,
            uid: auth.currentUser.uid,
            displayName: name,
            photoURL: profile,
          })
        );
        alert("Registration successful!");
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
      });
  };

  return (
    <div className="login">
      <h1>You are not logged in</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxH9EtBGZLM70wjjpKaCokdclvPPUOj3m1ZiXdjD5iZYL3m1YG54jnX0_V45KMkMnxg&usqp=CAU"
        alt="Linnkedin Image"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering"
          type="text"
        />
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email.."
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password.."
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={handleRegistration}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
