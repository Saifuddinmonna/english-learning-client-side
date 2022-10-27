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
	const [useroptionalname, setUseroptionalname] = useState(null);
	const [userphotooptional, setUserphotooptional] = useState(null);
	

	const createUser = (name, photo, email, password) => {
		setUseroptionalname(name);
		setUserphotooptional(photo);
		console.log(userphotooptional, useroptionalname);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const [premiumAccess, setPremiumAccess] = useState([]);
	const handlepremiumAccess = (cart) => {
	return setPremiumAccess(cart);
	};
	console.log("from auth provider", premiumAccess);


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



	console.log(userphotooptional, useroptionalname);

	



	const authInfo = {
		user,
		createUser,
		signinWithGoogle,
		signinWithGithub,
		Signouthandle,
		functionsignInWithEmailAndPassword,
		handlepremiumAccess,
		premiumAccess,
		userphotooptional,
		useroptionalname,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
