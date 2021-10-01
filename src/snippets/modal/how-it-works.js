export default `<div x-data="modal">
  <button x-bind="trigger"></button>

  <div x-bind="modalContainer" x-cloak>
    <div x-bind="modalOverlay"></div>

    <div x-bind="modalPanel">
      <!-- Modal contents here -->

      <button x-bind="close"></button>
    </div>
  </div>
</div>`
