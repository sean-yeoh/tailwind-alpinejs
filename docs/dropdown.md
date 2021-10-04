---
sidebar_position: 3
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Iframe from '../src/components/Iframe'
import CodeBlock from '@theme/CodeBlock'
import snippetHTML from '../src/snippets/dropdown/html'
import snippetJS from '../src/snippets/dropdown/js'
import howItWorks from '../src/snippets/dropdown/how-it-works'

# Dropdown

## JavaScript setup
<CodeBlock className="language-js">{snippetJS}</CodeBlock>

## How it works
- `x-data="dropdown"`: Dropdown root element that stores the state.
- `x-cloak`: Used to hide dropdown content before Alpine loads. https://alpinejs.dev/directives/cloak
- `x-bind="dropdownToggle"`: Toggle dropdown.
- `x-bind="dropdownMenu"`: Used to place dropdown content.

<CodeBlock className="language-html">{howItWorks}</CodeBlock>

## Examples

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <Iframe html={snippetHTML} script="/tailwind-alpinejs/dropdown.js" />
  </TabItem>
  <TabItem value="html" label="HTML">
    <CodeBlock className="language-html">{snippetHTML}</CodeBlock>
  </TabItem>
</Tabs>
