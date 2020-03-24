import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const SubmissionsPage = ({
  data: { allInternalSubmissions },
}) => (
  <Layout>
    <Helmet title={`Submissions |`} />
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>セッション一覧</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {allInternalSubmissions.group.map(({ edges }, ...index) => (
      <section className='section' key={index}>
        <div className='container'>
          <h3 className='title is-size-4'>初心者向け</h3>
          <div className='table-container'>
            <table className='table is-bordered'>
              <thead>
              <tr>
                <th>タイトル</th>
                <th>スピーカー</th>
              </tr>
              </thead>
              {edges.map(({ node } ) => (
                <tr key={node.id}>
                  <td><Link to={`/submissions/${kebabCase(node.id)}/`}>{node.title}</Link></td>
                  <td>名前</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default SubmissionsPage

export const submissionPageQuery = graphql`
  query allInternalSubmissionsQuery {
    allInternalSubmissions {
      group(field: level) {
        edges {
          node {
            level
            id
            title
            speakers {
              name
            }
          }
        }
      }
    }
 }
`;
