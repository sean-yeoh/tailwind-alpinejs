---
sidebar_position: 2
---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Iframe from '../src/components/Iframe'
import CodeBlock from '@theme/CodeBlock'
import snippetHTML from '../src/snippets/drawer/html'
import snippetJS from '../src/snippets/drawer/js'
import howItWorks from '../src/snippets/drawer/how-it-works'

# Drawer/Offcanvas/Slide-over

## JavaScript setup
<CodeBlock className="language-js">{snippetJS}</CodeBlock>

## How it works
- `<button data-drawer-id="<drawer-id>"></button>`: drawer trigger. Must contain `data-drawer-id`.
- `x-data="drawer"`: drawer root element that stores the state. Must have `id` attribute.
- `x-cloak`: Used to hide drawer content before Alpine loads. https://alpinejs.dev/directives/cloak
- `x-bind="drawerOverlay"`: drawer overlay/backdrop.
- `x-bind="drawerPanel"`: Used to place drawer content.
- `x-bind="close"`: Used to close drawer.

<CodeBlock className="language-html">{howItWorks}</CodeBlock>

## Examples

<Tabs>
  <TabItem value="preview" label="Preview" default>
    <Iframe html={snippetHTML} script="/tailwind-alpinejs/drawer.js" />
  </TabItem>
  <TabItem value="html" label="HTML">
    <CodeBlock className="language-html">{snippetHTML}</CodeBlock>
  </TabItem>
</Tabs>
