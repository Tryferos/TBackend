// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import admin from "firebase-admin";
import serviceAcount from '../../firebase-admin.json'

// Initialize Firebase
export const {auth} = admin.initializeApp({credential: admin.credential.cert(serviceAcount as admin.ServiceAccount)});