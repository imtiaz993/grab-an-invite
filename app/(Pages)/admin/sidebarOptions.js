export const sidebarOptions = [
  { title: "Dashboard", image: "dashboardIcon.png", route: "/dashboard" },
  {
    title: "Users",
    image: "users.png",
    components: [
      { title: "Guests", route: "/guests" },
      { title: "Hosts", route: "/hosts" },
    ],
  },
  {
    title: "Events",
    image: "eventIcon.png",
    components: [
      { title: "Manage Events", route: "/events" },
      { title: "Add New Event", route: "/new-event" },
      { title: "Manage Event Categories", route: "/event-categories" },
    ],
  },
  {
    title: "Custom Field",
    image: "dashboardIcon.png",
    route: "/custom-fields",
  },
  {
    title: "Change password",
    image: "changePassIcon.png",
    route: "/change-password",
  },
];
