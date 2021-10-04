export default `<button data-modal-id="<modal-id>" type="button"></button>

<div x-data="modal" x-cloak id="<modal-id>">
  <div x-bind="modalOverlay"></div>

  <div x-bind="modalContent">
    <button x-bind="modalClose"></button>
  </div>
</div>`
