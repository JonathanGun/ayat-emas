import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ayat Emas - JKI Puri Marina Semarang`,
    description: `Dapatkan Ayat Emas tahunan Anda dari JKI Puri Marina Semarang. Temukan pesan Tuhan untuk tahun ini.`,
    siteUrl: `https://ayat-emas-jpm.vercel.app`,
    image: `/images/logo.jpeg`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ayat-emas-jpm.vercel.app",
        sitemap: "https://ayat-emas-jpm.vercel.app/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ayat Emas`,
        short_name: `Ayat Emas`,
        start_url: `/`,
        background_color: `#0a4b51`,
        theme_color: `#0a4b51`,
        display: `standalone`,
        icon: `src/images/logo.jpeg`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Tangerine`,
            file: `https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap`,
          },
        ],
      },
    },
  ]
};

export default config;
