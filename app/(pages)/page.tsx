"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col w-96">
        <Link href="/signup/entrepreneur">Register as Ent</Link>
        <Link href="/signup/expert">Register as Expert</Link>
      </div>
    </>
  );
}
