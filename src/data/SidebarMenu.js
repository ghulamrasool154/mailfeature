import { Mialimages } from "../feature/Mialimages";
export const SidebarMenu = [
  {
    id: "1",
    name: "Inbox",
    icon: Mialimages.mailcion.default,
    link: "inbox",
    inbox: 5,
  },
  {
    id: "2",
    name: "Marked",
    icon: Mialimages.dashboardicon.default,
    link: "mail",
    inbox: "",
  },
  {
    id: "3",
    name: "Drafts",
    icon: Mialimages.dashboardicon.default,
    link: "Drafts",
    inbox: "",
  },
  {
    id: "4",
    name: "Sent",
    icon: Mialimages.dashboardicon.default,
    link: "sent",
    inbox: "",
  },
  {
    id: "5",
    name: "Chat",
    icon: Mialimages.dashboardicon.default,
    link: "Chat",
    inbox: "",
  },
  {
    id: "6",
    name: "Important ",
    icon: Mialimages.mailcion.default,
    link: "Important",
    inbox: 4,
  },
  {
    id: "7",
    name: "Group Chat ",
    icon: Mialimages.mailcion.default,
    link: "private-grou-chat",
    inbox: "",
  },

  {
    id: "8",
    name: "Deleted",
    icon: Mialimages.dashboardicon.default,
    link: "Deleted",
    inbox: "",
  },
];
