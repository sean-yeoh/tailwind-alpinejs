  export default `let modal = () => ({
  open: false,

  modalClose: {
    ["x-on:click"]() {
      this.open = false
    }
  },

  modalOverlay: {
    ["x-transition:enter"]: "ease-out duration-300",
    ["x-transition:enter-start"]: "opacity-0",
    ["x-transition:enter-end"]: "opacity-100",
    ["x-transition:leave"]: "ease-in duration-200",
    ["x-transition:leave-start"]: "opacity-100",
    ["x-transition:leave-end"]: "opacity-0",
    ["x-show"]() {
      return this.open
    },
  },

  modalContent: {
    ["x-transition:enter"]: "ease-out duration-300",
    ["x-transition:enter-start"]: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    ["x-transition:enter-end"]: "opacity-100 translate-y-0 sm:scale-100",
    ["x-transition:leave"]: "ease-in duration-200",
    ["x-transition:leave-start"]: "opacity-100 translate-y-0 sm:scale-100",
    ["x-transition:leave-end"]: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    ["x-on:click.outside"]: "open = false",
    ["x-show"]() {
      return this.open
    },
  }
})

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("[x-data='modal']").forEach(el => {
    let id = el.id
    el.setAttribute(\`x-on:open-modal-\${id}.window\`, "open = true")
    el.setAttribute("x-show", "open")

    document.querySelectorAll(\`[data-modal-id="\${id}"]\`).forEach(el => {
      el.setAttribute("x-on:click", \`$dispatch('open-modal-\${id}')\`)
    })
  })

  Alpine.data("modal", modal)
})`
