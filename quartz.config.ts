import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Churches of Good and Evil",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "paulinadupin.github.io/churches-of-good-and-evil",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "Crimson Text",
        code: "Courier Prime",
      },
      colors: {
        lightMode: {
          light: "#f4ecd8",          // Warm parchment background
          lightgray: "#d4c5a9",      // Aged paper borders
          gray: "#8b7355",           // Faded brown for secondary text
          darkgray: "#3d2817",       // Dark brown ink for body text
          dark: "s#3d322eff",           // Very dark brown for headers
          secondary: "#8b4513",      // Saddle brown for links
          tertiary: "#cd853f",       // Peru/tan for hover states
          highlight: "rgba(205, 133, 63, 0.15)",
          textHighlight: "#f4d03faa", // Gold highlight
        },
        darkMode: {
          light: "#1a1612",          // Dark leather book background
          lightgray: "#2d2520",      // Dark leather borders
          gray: "#8b7355",           // Faded text
          darkgray: "#d4c5a9",       // Cream body text
          dark: "#f4ecd8",           // Parchment white headers
          secondary: "#f3dda7ff",      // Goldenrod links
          tertiary: "#877059ff",       // Peru hover
          highlight: "rgba(205, 133, 63, 0.15)",
          textHighlight: "#d4c5a988", // Beige highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
