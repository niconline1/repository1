
fetch("./Integrantes.json")
    .then(response => response.json())
    .then(data => {

for(const Integrantes of data){
    integrante.innerHTML += `
<div class="card">
    <h2>${Integrantes.nombre}</h2>
    <p>${Integrantes.ocupacion}</p>
    <p>${Integrantes.tarea}</p>
    <img src=${Integrantes.img}
</div>`
}
})