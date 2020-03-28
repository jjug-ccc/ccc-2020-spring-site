const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              cover
              tags
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
      allInternalSubmissions {
        edges {
          node {
            id
            title
            level
            target
            category
            description
            speakers {
              profileUrl
              name
              companyOrCommunity
              activityList {
                url
                activityType
              }
              bio
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postsAndPages = result.data.allMarkdownRemark.edges

    // Post pages:
    let posts = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'article-page' })) {
        posts = posts.concat(edge)
      }
    })

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    postsAndPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    postsAndPages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    // Session Pages:
    const sessionsAndPages = result.data.allInternalSubmissions.edges;
    let sessionIds = [];
    sessionsAndPages
      .filter(( edge ) => edge.node.id !== "dummy")
      .forEach(edge => {
        sessionIds = sessionIds.concat(edge.node.id);
      });

    sessionIds.forEach(sessionId => {
      const sessionPath = `/sessions/${sessionId}`;

      createPage({
          path: sessionPath,
          component: path.resolve(`src/templates/sessions.js`),
          context: {
            sessionId
          }
        }
      )
    })
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  if (node.internal.type === `internal__submissions`) {
    const value = getNode(node.id);
    createNodeField({
      name: `sessions`,
      node,
      value
    })
  }
};
