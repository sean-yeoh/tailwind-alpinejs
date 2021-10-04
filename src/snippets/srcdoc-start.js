export default `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <link href="/tailwind-alpinejs/tailwind.min.css" rel="stylesheet">
      <script defer src="/tailwind-alpinejs/alpine.min.js"></script>
      <script src="CUSTOM_SCRIPT"></script>
      <style>
        [x-cloak] {
          display: none;
        }

        .main {
          display: grid;
          height: 100vh;
          margin: 0;
          place-items: center center;
        }
      </style>
    </head>
    <body class="bg-gray-200">
      <div class="main max-w-7xl mx-auto my-auto sm:px-6 lg:px-8">
`
