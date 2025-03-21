"use client";

import InputContainer from "@/components/InputContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/lib/shared/types";
import { useAuth } from "@/store/auth";
import { useState } from "react";

export default function ExpertSignUpPage() {
  const [formValues, setFormValues] = useState<User>({
    name: "",
    email: "",
    role: "Expert",
    industry: "",
    skills: [],
    yearsOfExperience: "",
    bio: "",
  });
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  async function onSubmit() {
    await signUp(formValues, password);
  }
  return (
    <div className="h-screen p-10 flex gap-10 w-full">
      <div className="flex-1 h-full bg-slate-200 rounded-xl"></div>
      <div className="flex-1">
        <div className="text-3xl font-bold">SIGN UP</div>
        <div className="flex flex-col gap-4 mt-10">
          <InputContainer label="Name">
            <Input
              placeholder="Enter name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </InputContainer>
          <InputContainer label="Email">
            <Input
              placeholder="Enter email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </InputContainer>
          <InputContainer label="Industry">
            <Input
              placeholder="Enter industry"
              value={formValues.industry}
              onChange={(e) =>
                setFormValues({ ...formValues, industry: e.target.value })
              }
            />
          </InputContainer>
          <InputContainer label="Skills">
            <Input
              placeholder="Enter skills"
              value={formValues.skills}
              onChange={(e) =>
                setFormValues({ ...formValues, skills: [e.target.value] })
              }
            />
          </InputContainer>
          <InputContainer label="Years of Experience">
            <Input
              placeholder="Enter years of experience"
              value={formValues.yearsOfExperience}
              type="number"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  yearsOfExperience: e.target.value,
                })
              }
            />
          </InputContainer>
          <InputContainer label="Bio">
            <Input
              placeholder="Enter bio"
              value={formValues.bio}
              onChange={(e) =>
                setFormValues({ ...formValues, bio: e.target.value })
              }
            />
          </InputContainer>
          <InputContainer label="Password">
            <Input
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <Button className="self-center w-full" onClick={onSubmit}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
