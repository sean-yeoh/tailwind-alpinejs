export default `<button data-drawer-id="<drawer-id>" type="button"></button>

<div x-data="drawer" x-cloak id="<drawer-id>">
  <div x-bind="drawerOverlay"></div>

  <div x-bind="drawerContent">
    <button x-bind="drawerClose"></button>
  </div>
</div>`
