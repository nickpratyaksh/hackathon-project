"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/store/auth";
import { useState } from "react";

export default function SignUpPage() {
  const { signUp } = useAuth();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  function onSubmit() {
    signUp(formValues.email, formValues.password);
  }
  return (
    <>
      <div className="flex flex-col w-96">
        <Input
          placeholder="Enter email"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <Input
          placeholder="Enter password"
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
        />
        <Button onClick={onSubmit}>Sign In</Button>
      </div>
    </>
  );
}
