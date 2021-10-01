let modal = () => ({
  open: false,

  trigger: {
    ["x-on:click"]() {
      this.open = !this.open
    },
  },

  close: {
    ["x-on:click"]() {
      this.open = false
    },
  },

  modalContainer: {
    ["x-show"]() {
      return this.open
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

  modalPanel: {
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

document.addEventListener('alpine:init', () => {
  Alpine.data("modal", modal)
})
