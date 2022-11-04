const container = document.querySelector(".container")
const coffees = [
{ name: "Perspiciatis", image: "./src/images/coffee1.jpg" },
{ name: "Voluptatem", image: "./src/images/coffee2.jpg" },
{ name: "Explicabo", image: "./src/images/coffee3.jpg" },
{ name: "Rchitecto", image: "./src/images/coffee4.jpg" },
{ name: " Beatae", image: "./src/images/coffee5.jpg" },
{ name: " Vitae", image: "./src/images/coffee6.jpg" },
{ name: "Inventore", image: "./src/images/coffee7.jpg" },
{ name: "Veritatis", image: "./src/images/coffee8.jpg" },
{ name: "Accusantium", image: "./src/images/coffee9.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
    ({ name, image }) =>
    (output += `
    <div class="card">
    <img class="card--avatar" src=${image} />
    <h1 class="card--title">${name}</h1>
    <a class="card--link" href="#">Taste</a>
    </div>
    `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))
    })
}