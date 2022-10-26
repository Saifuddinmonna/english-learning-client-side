import React, { createContext, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const providerGoogle = new GoogleAuthProvider();
	const providerGithub = new GithubAuthProvider();

	const functionsignInWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signinWithGoogle = () => {
		return signInWithPopup(auth, providerGoogle);
	};

	const signinWithGithub = () => {
		return signInWithPopup(auth, providerGithub);
	};
	const Signouthandle = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			console.log("user inside state", currentuser);
			setUser(currentuser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		signinWithGoogle,
		signinWithGithub,
		Signouthandle,
		functionsignInWithEmailAndPassword,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
