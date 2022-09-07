const html = `
  <h1>Hello, World!</h1>
`

document.querySelector("#app")!.insertAdjacentHTML("afterbegin", html);