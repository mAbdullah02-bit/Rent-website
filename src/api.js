import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA-6a4dXv1rQo8zI3SXZ56ZmL9oAxj4t2k",
  authDomain: "car-rent--website.firebaseapp.com",
  projectId: "car-rent--website",
  storageBucket: "car-rent--website.appspot.com",
  messagingSenderId: "1072405400419",
  appId: "1:1072405400419:web:c48797c9c8bb2001276156"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vehiclecollectionRef = collection(db, "vehicles");

export async function getvehicles() {
  try {
    console.log("Fetching all vehicles...");
    const snapshot = await getDocs(vehiclecollectionRef);
    const vehicles = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.log("Fetched vehicles: ", vehicles);
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicles: ", error);
    throw error;
  }
}

export async function getHostvehicles() {
  try {
    console.log("Fetching host vehicles...");
    const q = query(vehiclecollectionRef, where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const vehicles = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.log("Fetched host vehicles: ", vehicles);
    return vehicles;
  } catch (error) {
    console.error("Error fetching host vehicles: ", error);
    throw error;
  }
}

export async function getVan(id) {
  try {
    console.log(`Fetching van with id: ${id}`);
    const docRef = doc(db, "vehicles", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const vanData = { ...snapshot.data(), id: snapshot.id };
      console.log("Fetched van data: ", vanData);
      return vanData;
    } else {
      throw new Error(`No such document with id: ${id}`);
    }
  } catch (error) {
    console.error("Error fetching van: ", error);
    throw error;
  }
}



export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creds)
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    };
  }

  return data;
}
