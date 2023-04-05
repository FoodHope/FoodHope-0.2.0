import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { collection, addDoc, doc, setDoc, getDoc, getDocs, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";


const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)
	const [FoodData, setFoodData] = useState([]);

	async function signup(email, password, name, ph, address) {
		try {
			console.log(currentUser)
			const docRef = await setDoc(doc(db, "users", email), {
				Name: name,
				Email: email,
				Mobile: ph,
				Address: address
			});
			await setSnap("FoodData", email,{foods: []})
		} catch (e) {
			console.log("error adding doc", e);
		}
		return createUserWithEmailAndPassword(auth, email, password).then(res => console.log(res.user));
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password).then(res => console.log(res.user))
	}

	function logout() {
		return signOut(auth)
	}

	function resetPassword(email) {
		return sendPasswordResetEmail(auth, email).then(res => console.log(res.user))
	}

	function updateEmail(email) {
		return currentUser.updateEmail(email)
	}

	function updatePassword(password) {
		return currentUser.updatePassword(password)
	}

	function getSnap(col, dat) {
		return getDoc(doc(db, col, dat));
	}

	function setSnap(collection, document, data) {
		return setDoc(doc(db, collection, document), data);
	}

	function getUserDetails(){
		return getSnap("users", currentUser && currentUser.email);
	}

	async function updateProfile(name, email, phNum, address) {
		const docRef = doc(db, 'users', currentUser && currentUser.email);
		await updateDoc(docRef, {
			Name: name,
			Email: email,
			Mobile: phNum,
			Address: address
		}).then(() => {
			console.log("Profile Updated successfully!");
		}).catch((error) => {
			console.error("Error updating profile:", error);
		});
	}

	async function updateFood(index, myFoods, providerName, name, imageID, veg, area, serves, expiresIn, phNum, alt_phNum, address, landmark, description) {
		let food = {
			providerName: providerName,
			address: address,
			alt_phNum: alt_phNum,
			phNum: phNum,
			area: area,
			landmark: landmark,
			description: description,
			expiresIn: expiresIn,
			imageID: imageID,
			name: name,
			serves: serves,
			veg: veg
		};

		myFoods[index] = food;
		const docRef = doc(db, 'FoodData', currentUser && currentUser.email);
		await updateDoc(docRef, {
			foods: myFoods,
		}).then(() => {
			console.log("Food Updated successfully!");
		}).catch((error) => {
			console.error("Error updating FoodData:", error);
		});
	}



	function fetchFood() {
		return getDocs(collection(db, "FoodData"));
	};

	async function deleteFood(food) {
		console.log(food  )
		const docRef = doc(db, 'FoodData', currentUser && currentUser.email);
		await updateDoc(docRef, {
			foods: arrayRemove(food)
		}).then(() => {
			console.log("Food deleted successfully!");
		}).catch((error) => {
			console.error("Error updating profile:", error);
		});
	}

	async function addFood(providerName, name, imageID, veg, area, serves, expiresIn, phNum, alt_phNum, address, landmark, description) {
		const docRef = doc(db, 'FoodData', currentUser && currentUser.email);
		await updateDoc(docRef, {
			foods: arrayUnion({
				providerName: providerName,
				address: address,
				alt_phNum: alt_phNum,
				phNum: phNum,
				area: area,
				landmark: landmark,
				description: description,
				expiresIn: expiresIn,
				imageID: imageID,
				name: name,
				serves: serves,
				veg: veg
			})
		}).then(() => {
			console.log("New Food added successfully!");
		}).catch((error) => {
			console.error("Error adding food:", error);
		});
	}

	function capitalize(s) {
		return s && s[0].toUpperCase() + s.slice(1);
	}

	const images = [
		require('../conts/images/meals.png'),
		require('../conts/images/tiffen.png'),
		require('../conts/images/biryani.png'),
		require('../conts/images/sidedish.png'),
		require('../conts/images/beverages.png'),
	];

	useEffect(() => {
		// const fetch = fetchFood();
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			setLoading(false);
		})
		return unsubscribe;
	}, [])

	const value = {
		currentUser,
		FoodData,
		images,
		updateFood,
		getUserDetails,
		deleteFood,
		updateProfile,
		addFood,
		capitalize,
		fetchFood,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		getSnap,
		setSnap
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}