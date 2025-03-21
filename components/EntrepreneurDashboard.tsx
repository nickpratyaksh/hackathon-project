"use client";

import {
  Bell,
  Calendar,
  ChevronDown,
  MessageSquare,
  Users,
  Building,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StartUp, User } from "@/lib/shared/types";

// Mock data for the entrepreneur
const currentUser: User = {
  name: "John Doe",
  email: "john@example.com",
  role: "Entrepreneur",
  industry: "Technology",
  skills: ["Product Management", "Marketing", "Business Development"],
  yearsOfExperience: "5",
  bio: "Serial entrepreneur with a passion for technology and innovation.",
};

// Mock data for the startup
const myStartup: StartUp = {
  name: "TechInnovate",
  founderId: "user123",
  industry: "Technology",
  description:
    "A platform that connects entrepreneurs with expert mentors to help grow their businesses.",
  fundingStage: "Seed",
  website: "www.techinnovate.com",
};

// Mock data for recommended experts
const recommendedExperts: User[] = [
  {
    name: "Dr. Jane Smith",
    email: "jane@example.com",
    role: "Expert",
    industry: "Technology",
    skills: ["Software Development", "AI", "Product Strategy"],
    yearsOfExperience: "15",
    bio: "Former CTO with expertise in scaling technology startups.",
  },
  {
    name: "Michael Johnson",
    email: "michael@example.com",
    role: "Expert",
    industry: "Technology",
    skills: ["Venture Capital", "Fundraising", "Business Strategy"],
    yearsOfExperience: "12",
    bio: "Venture capitalist with a focus on early-stage tech companies.",
  },
  {
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "Expert",
    industry: "Technology",
    skills: ["Marketing", "Growth Hacking", "User Acquisition"],
    yearsOfExperience: "10",
    bio: "Marketing executive who has helped multiple startups achieve rapid growth.",
  },
];

export default function EntrepreneurDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2 font-semibold">
            <Users className="h-6 w-6" />
            <span>Hackthon Project</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            {/* <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search experts..."
                className="w-64 rounded-full bg-muted pl-8"
              />
            </div> */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="sr-only">Notifications</span>
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <div className="text-sm font-medium">{currentUser.name}</div>
                <div className="text-xs text-muted-foreground">
                  {currentUser.role}
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Welcome back, {currentUser.name}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your startup today
          </p>
        </div>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experts">Recommended Experts</TabsTrigger>
            <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Mentors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    In {myStartup.industry}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Unread Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">
                    From 3 conversations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Goals Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">60%</div>
                  <p className="text-xs text-muted-foreground">
                    2 of 5 completed
                  </p>
                </CardContent>
              </Card>
            </div>
            <StartupProfile startup={myStartup} />
          </TabsContent>

          <TabsContent value="experts" className="space-y-4">
            <RecommendedExperts
              experts={recommendedExperts}
              startupIndustry={myStartup.industry}
            />
          </TabsContent>

          <TabsContent value="sessions">
            <UpcomingSessions />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function StartupProfile({ startup }: { startup: StartUp }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            {startup.name}
          </CardTitle>
          <CardDescription>
            <Badge variant="outline">{startup.fundingStage} Stage</Badge>
            <span className="ml-2">{startup.industry}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Description</h3>
              <p className="text-sm text-muted-foreground">
                {startup.description}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Website</h3>
              <p className="text-sm text-primary underline">
                <a
                  href={`https://${startup.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {startup.website}
                </a>
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Edit Startup Profile</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Startup Metrics</CardTitle>
          <CardDescription>Track your progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Mentor Sessions</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Pitch Deck Reviews</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Business Model Iterations</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Investor Introductions</span>
              <span className="font-medium">2</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full">
            View Detailed Analytics
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function RecommendedExperts({
  experts,
  startupIndustry,
}: {
  experts: User[];
  startupIndustry: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Recommended Experts in {startupIndustry}
        </h2>
        <Button>Browse All Experts</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={`/placeholder.svg?height=64&width=64&text=${expert.name.charAt(
                      0
                    )}`}
                    alt={expert.name}
                  />
                  <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-center text-base">
                {expert.name}
              </CardTitle>
              <CardDescription className="text-center">
                {expert.yearsOfExperience} years in {expert.industry}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium">Expertise</h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {expert.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Bio</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {expert.bio}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 flex-col">
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: "Pitch Deck Review",
      expert: "Dr. Jane Smith",
      date: "Tomorrow",
      time: "10:00 AM",
      expertAvatar: "J",
    },
    {
      id: 2,
      title: "Fundraising Strategy",
      expert: "Michael Johnson",
      date: "In 3 days",
      time: "2:30 PM",
      expertAvatar: "M",
    },
    {
      id: 3,
      title: "Marketing Plan",
      expert: "Sarah Williams",
      date: "Next week",
      time: "11:15 AM",
      expertAvatar: "S",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Upcoming Sessions</h2>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule New
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <Card key={session.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge>{session.date}</Badge>
                <span className="text-sm font-medium">{session.time}</span>
              </div>
              <CardTitle className="text-base">{session.title}</CardTitle>
              <CardDescription>With {session.expert}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`/placeholder.svg?height=32&width=32&text=${session.expertAvatar}`}
                    alt={session.expert}
                  />
                  <AvatarFallback>{session.expertAvatar}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{session.expert}</p>
                  <p className="text-muted-foreground">Expert</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 flex-col">
              <Button variant="outline" className="w-full">
                Reschedule
              </Button>
              <Button className="w-full">Join</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
