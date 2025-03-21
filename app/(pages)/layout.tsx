"use client";

import { ReactNode, useEffect } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/firebaseConfig";
import { useAuth } from "@/store/auth";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function RootLayout({ children }: { children: ReactNode }) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  const { restoreUser } = useAuth();
  useEffect(() => {
    const loadPersistentUser = async () => {
      let idToken = null;
      if (user) idToken = await user.getIdToken();

      await restoreUser(idToken);
      // router.push("/");
    };
    if (!loading) loadPersistentUser();
  }, [loading, user]);

  if (loading) return <>Loading</>;
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
