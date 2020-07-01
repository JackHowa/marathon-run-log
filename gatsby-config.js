module.exports = {
  siteMetadata: {
    title: `Lake On The Left`,
    author: {
      name: `Jack Howard`,
      summary: `who lives in Lake View East, Chicago, and makes tea and web apps.`,
    },
    description: `Running to prep for virtual Chicago Marathon 2020.`,
    siteUrl: `https://run-log.netlify.app/`,
    social: {
      lurieUsername: `jackhowa`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lake On The Left: Chicago Marathon Virtual Training 2020`,
        short_name: `Lake On The Left`,
        start_url: `/`,
        background_color: `#002465`,
        theme_color: `#b2daf3`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-android-chrome-512x512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
