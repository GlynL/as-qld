import React from 'react'
import styled from 'styled-components'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

// issues with rendering embeddeed assets with hot reloading
// https://github.com/contentful/rich-text/issues/94
// https://github.com/gatsbyjs/gatsby/pull/15084
export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      if (node.data.target.fields) {
        return (
          <StyledImg
            src={node.data.target.fields.file['en-US'].url + '?w=300&h=300'}
          />
        )
      }
    },
  },
  renderText: text =>
    text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
}

const StyledImg = styled.img`
  margin-left: 20px;
  border: 1px solid var(--banner-bg-color);
`
