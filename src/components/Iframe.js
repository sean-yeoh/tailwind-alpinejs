import React from 'react';

export default function Iframe() {
  return (
    <iframe srcdoc='
      <!doctype html>
      <html lang="en">
      <head>
      <meta charset="utf-8">
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <script defer src="https://unpkg.com/alpinejs@3.4.2/dist/cdn.min.js"></script>
      </head>
      <body>
      <h1>Hello world</h1>
      </body>'>

    </iframe>
  );
}

// export default function HomepageFeatures() {
//   return (
//       <div className="container">

//       </div>
//   );
// }
