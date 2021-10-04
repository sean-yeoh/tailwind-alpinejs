let dropdown = () => ({
  open: false,

  dropdownToggle: {
    ["x-on:click"]() {
      this.open = ! this.open
    },
  },

  dropdownMenu: {
    ["x-transition:enter"]: "transition ease-out duration-100",
    ["x-transition:enter-start"]: "transform opacity-0 scale-95",
    ["x-transition:enter-end"]: "transform opacity-100 scale-100",
    ["x-transition:leave"]: "transition ease-in duration-75",
    ["x-transition:leave-start"]: "transform opacity-100 scale-100",
    ["x-transition:leave-end"]: "transform opacity-0 scale-95",
    ["x-on:click.outside"]() {
      this.open = false
    },
    ["x-show"]() {
      return this.open
    },
  }
})

window.addEventListener("DOMContentLoaded", (event) => {
  Alpine.data("dropdown", dropdown)
})
