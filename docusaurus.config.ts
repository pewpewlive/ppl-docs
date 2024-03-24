import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "PPL Docs",
  tagline: "Documentation for PewPew Live",
  favicon: "img/favicon.ico",
  url: "https://pewpewlive.github.io/",
  baseUrl: "/",
  organizationName: "pewpewlive",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/pewpewlive/ppl-docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: "PPL Docs",
      logo: {
        alt: "PewPew Logo - Alpha ship",
        src: "img/icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/pewpewlive/ppl-utils",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "PPL Level development",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Website",
              href: "https://pewpew.live/",
            },
            {
              label: "Discord",
              href: "https://pewpew.live/discord",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/pewpewlive",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} pewpewlive. Licensed under MIT. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["json", "lua"],
    },
  } satisfies Preset.ThemeConfig,
  themes: [require.resolve("@easyops-cn/docusaurus-search-local")],
};

export default config;
