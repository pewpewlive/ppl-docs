import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "PPL Docs",
  tagline: "Documentation for PewPew Live",
  favicon: "img/favicon.png",
  url: "https://pewpewlive.github.io/",
  baseUrl: "/ppl-docs/",
  organizationName: "pewpewlive",
  projectName: "ppl-docs",
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
          sidebarCollapsed: false,
          routeBasePath: "/",
        },
        blog: false,
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
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "ppl-utils (development utilities)",
              href: "https://github.com/pewpewlive/ppl-utils",
            },
            {
              label: "ppl-i18n (translations)",
              href: "https://github.com/pewpewlive/ppl-i18n",
            },
            {
              label: "ppl-docs (documentation)",
              href: "https://github.com/pewpewlive/ppl-docs",
            },
          ],
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
        hideable: true,
      },
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["json", "lua"],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [require.resolve('docusaurus-lunr-search')],
}

export default config
