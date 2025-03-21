export type User = {
  name: string;
  email: string;
  role: "Expert" | "Entrepreneur";
  industry: string;
  skills: string[];
  yearsOfExperience: string;
  bio: string;
};

export type StartUp = {
  name: string;
  founderId: string;
  industry: string;
  description: string;
  fundingStage: string;
  website: string;
};
