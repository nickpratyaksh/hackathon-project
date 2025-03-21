import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { User } from "@/lib/shared/types";
import auth from "@/firebase/initializeFirebase";
import axios from "axios";
import { toast } from "sonner";
import router from "next/router";

interface AuthState {
  user?: User;
  loading: boolean;
  isAuthenticated: boolean;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (user: User, password: string) => Promise<void>;
  restoreUser: (idToken: string | null) => Promise<void>;
  logOut: () => Promise<void>;
}

export const useAuth = create<AuthState>()((set) => ({
  user: undefined,
  loading: true,
  isAuthenticated: false,
  logIn: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = auth.currentUser;
      if (!firebaseUser) return;
      const idToken = await firebaseUser.getIdToken();
      axios.defaults.headers["Authorization"] = idToken as string;
      const res = await axios.get("/api/auth");
      set({ user: res.data, loading: false, isAuthenticated: true });
      toast("Logged in successfully");
    } catch (error) {
      toast("An error occurred");
      console.log(error);
      set({ loading: false });
    }
  },
  signUp: async (user, password) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, password);
      const firebaseUser = auth.currentUser;
      if (!firebaseUser) return;
      const idToken = await firebaseUser.getIdToken();
      axios.defaults.headers["Authorization"] = idToken as string;
      const res = await axios.post("/api/user", user);
      set({ user: res.data, loading: false, isAuthenticated: true });
      toast("Account created successfully");
    } catch (error) {
      toast("An error occurred");
      console.log(error);
      set({ loading: false });
    }
  },
  async restoreUser(idToken) {
    if (!idToken) return set({ loading: false });
    try {
      axios.defaults.headers["Authorization"] = idToken;
      const res = await axios.get("/api/auth");
      set({ user: res.data, loading: false, isAuthenticated: true });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  logOut: async () => {
    try {
      await signOut(auth);
      set({ user: undefined, isAuthenticated: false, loading: false });
      router.push("/login");
      toast("Successfully logged out");
    } catch (error) {
      console.log(error);
      toast("An error occurred");
    }
  },
}));
