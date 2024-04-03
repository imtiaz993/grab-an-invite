export const sidebarOptions = [
  { title: "Dashboard", image: "dashboardIcon.png", route: "/dashboard" },
  {
    title: "Events",
    image: "eventIcon.png",
    components: [
      { title: "Add New Event", route: "/new-event" },
      { title: "Manage Events", route: "/events" },
    ],
  },
  {
    title: "Requests",
    image: "requestIcon.png",
    components: [
      { title: "Requested Events", route: "/requested-events" },
      { title: "Received Requests", route: "/received-requests" },
    ],
  },
  {
    title: "Invites",
    image: "invitesIcon.png",
    components: [
      { title: "Send Invites", route: "/invites/send" },
      { title: "Received Invites", route: "/invites/received" },
    ],
  },
  { title: "Guests List", image: "guestListIcon.png", route: "/guests" },
  { title: "Profile", image: "profileIcon.png", route: "/profile" },
  {
    title: "Upgrade Plans",
    image: "changePassIcon.png",
    route: "/plans",
  },
  {
    title: "Auto Apply",
    image: "autoApplyIcon.png",
    route: "/auto-apply",
  },
  {
    title: "Change password",
    image: "changePassIcon.png",
    route: "/change-password",
  },
];