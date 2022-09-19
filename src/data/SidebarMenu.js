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
    link: "drafts",
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
    name: "Important ",
    icon: Mialimages.mailcion.default,
    link: "important",
    inbox: 4,
  },
  {
    id: "6",
    name: "Deleted",
    icon: Mialimages.dashboardicon.default,
    link: "delete",
    inbox: "",
  },
];
