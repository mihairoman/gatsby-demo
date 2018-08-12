module.exports = {
  siteMetadata: {
    title: 'Gatsby Demo Project',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/content`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'
  ]
}