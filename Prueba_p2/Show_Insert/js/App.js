const formAddCars = document.getElementById("formAddAuto");
const cleanBtn = document.getElementById("btn-limpiar");

async function addCar() {
    
    let canWeAdd = await emptyValues();
    if(canWeAdd){
        let carAdded = {
            "marca": document.getElementById("marca").value,
            "horsePower": document.getElementById("horsePower").value,
            "velocidad": document.getElementById("velocidad").value,
            "precio": document.getElementById("precio").value,
            "imgUrl": document.getElementById("imgUrl").value
        };
        const autos = (localStorage.getItem("autos") === null)?[]:JSON.parse(localStorage.getItem("autos"));
    
        autos.push(carAdded);
    
        localStorage.setItem("autos" , JSON.stringify(autos));
    
        chargeProducts();
    }
}

// Event Listener
formAddCars.addEventListener("submit", ()=>{
    event.preventDefault();
    addCar();
});

cleanBtn.addEventListener("click", ()=>{
    clean();
});

// Charge with localStorage
function chargeProducts() {
    const Cars = (localStorage.getItem("autos") === null)?[]:JSON.parse(localStorage.getItem("autos"));
    const rootElement = document.getElementById("cards-container");
    let cards_template = "";
    let i = 0;

    Cars.map((carro)=>{
        cards_template += `
        <div class="card">
            <div class="cards-img">
                <img src="${carro.imgUrl}" alt="img" class="img" />
            </div>
            <div class="cards-title">${carro.marca}</div>
            <div class="cards-descripcion">
                <ul class="list-group">
                    <li class="list-group-item">Velocidad: ${carro.velocidad}</li>
                    <li class="list-group-item">Hourse power: ${carro.horsePower}</li>
                    <li class="list-group-item">Precio: ${carro.precio}</li>
                </ul>
            </div>
        </div>
        `;
        i++;
    });

    rootElement.innerHTML = cards_template;
}
chargeProducts();

// Clean inputs
function clean() {
    document.getElementById("marca").value = "";
    document.getElementById("horsePower").value = "";
    document.getElementById("velocidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imgUrl").value = "";
}

function emptyValues() {
    const marca = document.getElementById("marca").value;
    const horsePower = document.getElementById("horsePower").value;
    const velocidad = document.getElementById("velocidad").value;
    const precio = document.getElementById("precio").value;
    const url = document.getElementById("imgUrl").value;

    return ( marca !== "" && horsePower !== "" && velocidad !== "" && precio !== "" && url !== "");
}
