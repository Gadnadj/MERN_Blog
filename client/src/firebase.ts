import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'mern-blog-a038f.firebaseapp.com',
    projectId: 'mern-blog-a038f',
    storageBucket: 'mern-blog-a038f.firebasestorage.app',
    messagingSenderId: '979289515113',
    appId: '1:979289515113:web:af73738580de906c9faef8'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);