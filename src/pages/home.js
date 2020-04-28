import React from 'react'
export default ({ data }) => {
  return (
    <div>
      <h1>{data.contentstackHome.title}</h1>
    </div>
  )
}
export const pageQuery = graphql`
    query HomeQuery {
      contentstackHome {
        title
      }
    }
`