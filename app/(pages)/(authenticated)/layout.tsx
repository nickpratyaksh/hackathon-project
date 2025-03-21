"use client";

import auth from "@/firebase/initializeFirebase";
import { useAuth } from "@/store/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log("User is signed in.");
  //       console.log(user);
  //     } else {
  //       console.log("User is signed out.");
  //       router.push("/login");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   if (!user && !loading) {
  //     router.push("/");
  //     return;
  //   }
  //   if (!loading && !isAuthenticated) router.push("/");
  // }, [isAuthenticated, loading, router, user]);

  if (loading) return <>Loading</>;
  return <>{children}</>;
}
