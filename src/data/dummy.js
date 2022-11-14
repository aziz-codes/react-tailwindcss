import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  TicketIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
export const links = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/statistics",
    label: "Statistics",
    icon: <ChartBarIcon />,
  },
  {
    path: "/employees",
    label: "Employees",
    icon: <UsersIcon />,
  },
  {
    path: "/equipment",
    label: "Equipment",
    icon: <TicketIcon />,
  },
  {
    path: "/client",
    label: "Client",
    icon: <UserCircleIcon />,
  },
];
export const chat = [
  {
    name: "Aziz",
    avatar: "",
    message: "Hello bro",
    msgTime: Date("2022-03-25").toString().slice(0, 15),
  },
  {
    name: "Asad",
    avatar: "",
    message: "can i get some help?",
    msgTime: Date("2022-04-25").toString().slice(0, 15),
  },
  {
    name: "Anas",
    avatar: "",
    message: "what's the update",
    msgTime: Date("2022-01-25").toString().slice(0, 15),
  },
  {
    name: "Hamza",
    avatar: "",
    message:
      "Any Idea? May be i have some kind of update to do the following thing you know",
    msgTime: Date("2022-06-25").toString().slice(0, 15),
  },
  {
    name: "Clary",
    avatar: "",
    message:
      "Any Idea? May be i have some kind of update to do the following thing you know",
    msgTime: Date("2022-06-25").toString().slice(0, 15),
  },
  {
    name: "Stev",
    avatar: "",
    message:
      "Any Idea? May be i have some kind of update to do the following thing you know",
    msgTime: Date("2022-06-25").toString().slice(0, 15),
  },
];
