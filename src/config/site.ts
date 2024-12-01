export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TrinUp: Nutrición y superación",
  description:
    "TrinUp es un app donde toda persona merece o puede mejorar su estilo de vida.",
  navItems: [
    {
      label: "Precios",
      href: "/precios",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
