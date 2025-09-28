import db from './firebase.js';
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore"

const postsCollection = collection(db, "posts");

export async function fetchPosts() {
  const postsSnapshot = await getDocs(postsCollection);
  const postsList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return postsList;
}

export async function createPost(text) {
    await addDoc(postsCollection, {
        text: text,
        timestamp: serverTimestamp()
    });
}
