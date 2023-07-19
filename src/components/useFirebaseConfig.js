import React, { useEffect } from 'react'
import { initializeApp } from "firebase/app";

export default function useFirebaseConfig() {
    const [app, setApp] = React.useState(null);

    useEffect(() => {

        const firebaseConfig = {
            apiKey: "AIzaSyByk_7SoT2-WcFq4BfNTSKvfa6Z2Fx1BtI",
            authDomain: "espanol-8923a.firebaseapp.com",
            projectId: "espanol-8923a",
            storageBucket: "espanol-8923a.appspot.com",
            messagingSenderId: "507589262760",
            appId: "1:507589262760:web:6fe7674845b962e5c8319d"
        };

        // Initialize Firebase
        const appInitialized = initializeApp(firebaseConfig);
        setApp(appInitialized);

    }, [])


    return [app]


}
