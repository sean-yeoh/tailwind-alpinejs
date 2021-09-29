---
sidebar_position: 1
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Iframe from '../src/components/Iframe'
import CodeBlock from '@theme/CodeBlock'
import snippetHTML from '../src/snippets/modal/html'
import snippetJS from '../src/snippets/modal/js'

# Modal

## Preview

<Iframe html={snippetHTML} js={snippetJS} />

## Code

<Tabs>
  <TabItem value="html" label="HTML" default>
    <CodeBlock className="language-html">{snippetHTML}</CodeBlock>
  </TabItem>
  <TabItem value="js" label="JS">
    <CodeBlock className="language-js">{snippetJS}</CodeBlock>
  </TabItem>
</Tabs>
