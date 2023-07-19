import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const signIn = async (auth, email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        return user;
    } catch (error) {
        return { error: error.message }
    }
};

const signOutUser = async (auth) => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
};
export { signIn, signOutUser };