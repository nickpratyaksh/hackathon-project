"use client";
import {
  Bell,
  Calendar,
  ChevronDown,
  MessageSquare,
  Users,
  Clock,
  UserCheck,
  Settings,
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
import { Progress } from "@/components/ui/progress";
import { StartUp, User } from "@/lib/shared/types";

// Mock data for the expert
const currentUser: User = {
  name: "Dr. Jane Smith",
  email: "jane@example.com",
  role: "Expert",
  industry: "Technology",
  skills: ["Software Development", "AI", "Product Strategy", "Venture Capital"],
  yearsOfExperience: "15",
  bio: "Former CTO with expertise in scaling technology startups. I've helped over 50 startups refine their technology strategy and secure funding.",
};

// Mock data for mentees and their startups
const mentees: Array<{ user: User; startup: StartUp }> = [
  {
    user: {
      name: "John Doe",
      email: "john@example.com",
      role: "Entrepreneur",
      industry: "Technology",
      skills: ["Product Management", "Marketing", "Business Development"],
      yearsOfExperience: "5",
      bio: "Serial entrepreneur with a passion for technology and innovation.",
    },
    startup: {
      name: "TechInnovate",
      founderId: "user123",
      industry: "Technology",
      description:
        "A platform that connects entrepreneurs with expert mentors to help grow their businesses.",
      fundingStage: "Seed",
      website: "www.techinnovate.com",
    },
  },
  {
    user: {
      name: "Emily Chen",
      email: "emily@example.com",
      role: "Entrepreneur",
      industry: "Technology",
      skills: ["Software Engineering", "UX Design", "Data Analysis"],
      yearsOfExperience: "3",
      bio: "First-time founder with a background in software engineering.",
    },
    startup: {
      name: "DataViz",
      founderId: "user456",
      industry: "Technology",
      description:
        "AI-powered data visualization platform for non-technical users.",
      fundingStage: "Pre-seed",
      website: "www.dataviz.io",
    },
  },
  {
    user: {
      name: "Marcus Johnson",
      email: "marcus@example.com",
      role: "Entrepreneur",
      industry: "Technology",
      skills: ["Business Strategy", "Sales", "Finance"],
      yearsOfExperience: "7",
      bio: "Second-time founder looking to scale my SaaS business.",
    },
    startup: {
      name: "CloudSecure",
      founderId: "user789",
      industry: "Technology",
      description:
        "Enterprise-grade security solutions for cloud infrastructure.",
      fundingStage: "Series A",
      website: "www.cloudsecure.com",
    },
  },
];

// Mock data for mentorship requests
const mentorshipRequests: Array<{ user: User; startup: StartUp }> = [
  {
    user: {
      name: "Alex Rivera",
      email: "alex@example.com",
      role: "Entrepreneur",
      industry: "Technology",
      skills: ["Mobile Development", "UI/UX", "Product Management"],
      yearsOfExperience: "4",
      bio: "Mobile app developer turned founder.",
    },
    startup: {
      name: "AppLaunch",
      founderId: "user321",
      industry: "Technology",
      description: "No-code platform for launching mobile apps quickly.",
      fundingStage: "Seed",
      website: "www.applaunch.dev",
    },
  },
  {
    user: {
      name: "Sophia Kim",
      email: "sophia@example.com",
      role: "Entrepreneur",
      industry: "Technology",
      skills: ["Machine Learning", "Data Science", "Research"],
      yearsOfExperience: "6",
      bio: "PhD in Computer Science with a focus on machine learning applications.",
    },
    startup: {
      name: "NeuralLearn",
      founderId: "user654",
      industry: "Technology",
      description:
        "AI-powered educational platform that adapts to individual learning styles.",
      fundingStage: "Pre-seed",
      website: "www.neurallearn.ai",
    },
  },
];

export default function ExpertDashboard() {
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
                placeholder="Search entrepreneurs..."
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
                <AvatarFallback>JS</AvatarFallback>
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
            Here's an overview of your mentorship activities
          </p>
        </div>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mentees">My Mentees</TabsTrigger>
            <TabsTrigger value="requests">Mentorship Requests</TabsTrigger>
            <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Mentees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mentees.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Across {mentees.length} startups
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Next 7 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Mentorship Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mentorshipRequests.length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pending review
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Feedback Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <p className="text-xs text-muted-foreground">
                    Based on 42 sessions
                  </p>
                </CardContent>
              </Card>
            </div>
            <ExpertProfile expert={currentUser} />
          </TabsContent>

          <TabsContent value="mentees" className="space-y-4">
            <MyMentees mentees={mentees} />
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            <MentorshipRequests requests={mentorshipRequests} />
          </TabsContent>

          <TabsContent value="sessions">
            <UpcomingSessions />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function ExpertProfile({ expert }: { expert: User }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="/placeholder.svg?height=64&width=64"
                alt={expert.name}
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{expert.name}</CardTitle>
              <CardDescription>
                {expert.yearsOfExperience} years in {expert.industry}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Bio</h3>
              <p className="text-sm text-muted-foreground">{expert.bio}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Skills & Expertise</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {expert.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Contact Information</h3>
              <p className="text-sm text-muted-foreground">{expert.email}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Edit Profile</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mentorship Settings</CardTitle>
          <CardDescription>
            Configure your mentorship preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Availability</h3>
              <p className="text-sm text-muted-foreground">10 hours/week</p>
              <Button variant="link" className="h-auto p-0 text-sm">
                Update schedule
              </Button>
            </div>
            <div>
              <h3 className="text-sm font-medium">Preferred Industries</h3>
              <div className="mt-1 flex flex-wrap gap-1">
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">SaaS</Badge>
                <Badge variant="outline">AI/ML</Badge>
              </div>
              <Button variant="link" className="h-auto p-0 text-sm">
                Edit preferences
              </Button>
            </div>
            <div>
              <h3 className="text-sm font-medium">Session Duration</h3>
              <p className="text-sm text-muted-foreground">30 min, 60 min</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full">
            <Settings className="mr-2 h-4 w-4" />
            Manage Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function MyMentees({
  mentees,
}: {
  mentees: Array<{ user: User; startup: StartUp }>;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Current Mentees</h2>
        <Button variant="outline">
          <UserCheck className="mr-2 h-4 w-4" />
          Manage Mentorships
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mentees.map((mentee, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between">
                <Badge variant="outline">{mentee.startup.fundingStage}</Badge>
                <Badge variant="secondary">{mentee.startup.industry}</Badge>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40&text=${mentee.user.name.charAt(
                      0
                    )}`}
                    alt={mentee.user.name}
                  />
                  <AvatarFallback>{mentee.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">
                    {mentee.user.name}
                  </CardTitle>
                  <CardDescription>{mentee.startup.name}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium">Startup Description</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {mentee.startup.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Mentorship Progress</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Sessions Completed</span>
                      <span>
                        {index === 0 ? "5/12" : index === 1 ? "3/8" : "7/10"}
                      </span>
                    </div>
                    <Progress
                      value={index === 0 ? 42 : index === 1 ? 38 : 70}
                      className="h-2"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Focus Areas</h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {index === 0 ? (
                      <>
                        <Badge variant="outline" className="text-xs">
                          Pitch Deck
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Fundraising
                        </Badge>
                      </>
                    ) : index === 1 ? (
                      <>
                        <Badge variant="outline" className="text-xs">
                          Product Strategy
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          MVP Development
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Badge variant="outline" className="text-xs">
                          Scaling
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Team Building
                        </Badge>
                      </>
                    )}
                  </div>
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

function MentorshipRequests({
  requests,
}: {
  requests: Array<{ user: User; startup: StartUp }>;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Pending Mentorship Requests</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {requests.map((request, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between">
                <Badge variant="outline">{request.startup.fundingStage}</Badge>
                <Badge variant="secondary">{request.startup.industry}</Badge>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40&text=${request.user.name.charAt(
                      0
                    )}`}
                    alt={request.user.name}
                  />
                  <AvatarFallback>{request.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">
                    {request.user.name}
                  </CardTitle>
                  <CardDescription>{request.startup.name}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium">Startup Description</h3>
                  <p className="text-sm text-muted-foreground">
                    {request.startup.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">
                    Entrepreneur Background
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {request.user.bio}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Seeking Help With</h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {index === 0 ? (
                      <>
                        <Badge variant="outline" className="text-xs">
                          Product Market Fit
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Go-to-Market Strategy
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Badge variant="outline" className="text-xs">
                          AI Implementation
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Technical Architecture
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 flex-col">
              <Button variant="outline" className="w-full">
                Decline
              </Button>
              <Button className="w-full">Accept Request</Button>
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
      entrepreneur: "John Doe",
      startup: "TechInnovate",
      date: "Tomorrow",
      time: "10:00 AM",
      avatar: "J",
    },
    {
      id: 2,
      title: "Technical Architecture Review",
      entrepreneur: "Emily Chen",
      startup: "DataViz",
      date: "In 2 days",
      time: "2:30 PM",
      avatar: "E",
    },
    {
      id: 3,
      title: "Scaling Strategy",
      entrepreneur: "Marcus Johnson",
      startup: "CloudSecure",
      date: "Friday",
      time: "11:15 AM",
      avatar: "M",
    },
    {
      id: 4,
      title: "Investor Pitch Preparation",
      entrepreneur: "John Doe",
      startup: "TechInnovate",
      date: "Next Monday",
      time: "9:00 AM",
      avatar: "J",
    },
    {
      id: 5,
      title: "Product Roadmap Planning",
      entrepreneur: "Emily Chen",
      startup: "DataViz",
      date: "Next Wednesday",
      time: "3:00 PM",
      avatar: "E",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Upcoming Sessions</h2>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Next 7 Days</CardTitle>
          <CardDescription>Your scheduled mentoring sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center gap-4 rounded-lg border p-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{session.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{session.date}</Badge>
                      <span className="text-sm font-medium">
                        {session.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>With {session.entrepreneur}</span>
                    <span>•</span>
                    <span>{session.startup}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full">
            View All Scheduled Sessions
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
