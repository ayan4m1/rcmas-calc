require('dotenv/config');

module.exports = {
  pathPrefix: '/rcmas-calc',
  siteMetadata: {
    title: 'rcmas-calc',
    author: {
      name: 'ayan4m1 <andrew@bulletlogic.com>'
    },
    description: 'rcmas-calc',
    siteUrl: 'https://ayan4m1.github.io/rcmas-calc/'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'RCMAS-2 Calc',
        /* eslint-disable camelcase */
        short_name: 'RCMAS-2',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          quietDeps: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        configType: 'flat',
        eslintPath: 'eslint/use-at-your-own-risk'
      }
    },
    '@ayan4m1/gatsby-plugin-root-import'
  ]
};
