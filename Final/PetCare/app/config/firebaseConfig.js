import Constants from 'expo-constants';

const getExtra = () => {
  return Constants.expoConfig?.extra ||
         Constants.manifest?.extra || // legacy support
         Constants.manifest2?.extra || // EAS Dev Client
         {};
};

const extra = getExtra();

export const firebaseConfig = {
  apiKey: extra.FIREBASE_API_KEY,
  authDomain: extra.FIREBASE_AUTH_DOMAIN,
  projectId: extra.FIREBASE_PROJECT_ID,
  storageBucket: extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: extra.FIREBASE_APP_ID,
};
