  export default `let drawer = () => ({
  open: false,

  drawerClose: {
    ["x-on:click"]() {
      this.open = false
    }
  },

  drawerOverlay: {
    ["x-transition:enter"]: "ease-in-out duration-500",
    ["x-transition:enter-start"]: "opacity-0",
    ["x-transition:enter-end"]: "opacity-100",
    ["x-transition:leave"]: "ease-in duration-500",
    ["x-transition:leave-start"]: "opacity-100",
    ["x-transition:leave-end"]: "opacity-0",
    ["x-show"]() {
      return this.open
    },
  },

  drawerContent: {
    ["x-transition:enter"]: "transform transition ease-in-out duration-500 sm:duration-700",
    ["x-transition:enter-start"]: "translate-x-full",
    ["x-transition:enter-end"]: "translate-x-0",
    ["x-transition:leave"]: "transform transition ease-in-out duration-500 sm:duration-700",
    ["x-transition:leave-start"]: "translate-x-0",
    ["x-transition:leave-end"]: "translate-x-full",
    ["x-on:click.outside"]: "open = false",
    ["x-show"]() {
      return this.open
    },
  }
})

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("[x-data='drawer']").forEach(el => {
    let id = el.id
    el.setAttribute(\`x-on:open-drawer-\${id}.window\`, "open = true")
    el.setAttribute("x-show", "open")

    document.querySelectorAll(\`[data-drawer-id="\${id}"]\`).forEach(el => {
      el.setAttribute("x-on:click", \`$dispatch('open-drawer-\${id}')\`)
    })
  })

  Alpine.data("drawer", drawer)
})
`
