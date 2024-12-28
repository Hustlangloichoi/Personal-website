const footer = document.querySelector('footer');
const welcome = () => {
    const x = document.createElement("div");
    x.innerHTML = `
    <p>Welcome to my world!</p>
    `;
    footer.appendChild(x);
}
welcome();

