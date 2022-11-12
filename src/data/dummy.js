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
