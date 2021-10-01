---
sidebar_position: 1
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Iframe from '../src/components/Iframe'
import CodeBlock from '@theme/CodeBlock'
import snippetHTML from '../src/snippets/modal/html'
import snippetHTML2 from '../src/snippets/modal/html2'
import snippetHTML3 from '../src/snippets/modal/html3'
import snippetJS from '../src/snippets/modal/js'
import howItWorks from '../src/snippets/modal/how-it-works'

# Modal

## JavaScript setup
<CodeBlock className="language-js">{snippetJS}</CodeBlock>

## How it works
<CodeBlock className="language-html">{howItWorks}</CodeBlock>

## Examples

### Single modal

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <Iframe html={snippetHTML}  />
  </TabItem>
  <TabItem value="html" label="HTML">
    <CodeBlock className="language-html">{snippetHTML}</CodeBlock>
  </TabItem>
</Tabs>

### Modal inside table

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <Iframe html={snippetHTML2}  />
  </TabItem>
  <TabItem value="html" label="HTML">
    <CodeBlock className="language-html">{snippetHTML2}</CodeBlock>
  </TabItem>
</Tabs>

### Multiple modals

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <Iframe html={snippetHTML3}  />
  </TabItem>
  <TabItem value="html" label="HTML">
    <CodeBlock className="language-html">{snippetHTML3}</CodeBlock>
  </TabItem>
</Tabs>
