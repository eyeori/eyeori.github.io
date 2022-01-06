const path = require("path");
module.exports = {
  siteMetadata: {
    title: `Alan Fu`,
    subtitle: `software developer`,
    description: `Alan's personal blog site.`,
    author: `@eyeori`,
    github: `https://github.com/eyeori/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.resolve(`blog`, `content`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`blog`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eyeori.xyz`,
        short_name: `eyeori`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(__dirname, `src/images/gatsby-icon.png`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, `src/pages`),
      },
    },
  ],
};
