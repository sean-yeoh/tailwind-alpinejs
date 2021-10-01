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
- `x-data="modal"`: Root element that stores the state.
- `x-bind="trigger"`: Used to open modal.
- `x-cloak`: Used to hide modal content before Alpine loads. https://alpinejs.dev/directives/cloak
- `x-bind="modalContainer"`: Used to wrap the actual modal.
- `x-bind="modalOverlay"`: Modal overlay/backdrop.
- `x-bind="modalPanel"`: Used to place modal content.
- `x-bind="close"`: Used to close modal.

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
