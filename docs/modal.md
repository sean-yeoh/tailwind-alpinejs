---
sidebar_position: 1
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Iframe from '../src/components/Iframe'
import CodeBlock from '@theme/CodeBlock'
import snippetHTML from '../src/snippets/modal/html'
import snippetJS from '../src/snippets/modal/js'
import howItWorks from '../src/snippets/modal/how-it-works'

# Modal

## JavaScript setup
<CodeBlock className="language-js">{snippetJS}</CodeBlock>

## How it works
- `<button data-modal-id="<modal-id>"></button>`: Modal trigger. Must contain `data-modal-id`.
- `x-data="modal"`: Modal root element that stores the state. Must have `id` attribute.
- `x-cloak`: Used to hide modal content before Alpine loads. https://alpinejs.dev/directives/cloak
- `x-bind="modalOverlay"`: Modal overlay/backdrop.
- `x-bind="modalPanel"`: Used to place modal content.
- `x-bind="modalClose"`: Used to close modal.

<CodeBlock className="language-html">{howItWorks}</CodeBlock>

## Examples

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <Iframe html={snippetHTML} script="/tailwind-alpinejs/modal.js" />
  </TabItem>
  <TabItem value="html" label="HTML">
    <CodeBlock className="language-html">{snippetHTML}</CodeBlock>
  </TabItem>
</Tabs>
