const title = `ITakayuki Prototypes`;

const html = `
  <h1>Hello, World!</h1>
`

document.head.insertAdjacentHTML("afterbegin", `<title>${title}</title>`);
document.querySelector("#app")!.insertAdjacentHTML("afterbegin", html);