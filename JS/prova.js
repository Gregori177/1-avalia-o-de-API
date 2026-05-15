let resultado = document.getElementById("resultado");

function pokemon() {

    resultado.innerHTML = "";

    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        .then(resposta => resposta.json())
        .then(dados => {

            for (let i = 0; i < 12; i++) {

                fetch(dados.results[i].url)
                    .then(resposta => resposta.json())
                    .then(pokemon => {

                        resultado.innerHTML += `

                <div class="card">

                    <img src="${pokemon.sprites.front_default}">

                    <h2>${pokemon.name}</h2>

                    <p>Número: ${pokemon.id}</p>

                    <p>Tipo: ${pokemon.types[0].type.name}</p>
                    
                   
                
                    </div>

                `;

                    });

            }

        });

}

function rick() {

    resultado.innerHTML = "";

    fetch("https://rickandmortyapi.com/api/character")
        .then(resposta => resposta.json())
        .then(dados => {

            for (let i = 0; i < 6; i++) {

                resultado.innerHTML += `

            <div class="card">

                <img src="${dados.results[i].image}">

                <h2>Nome: ${dados.results[i].name}</h2>

                <p>Espécie: ${dados.results[i].species}</p>
                
                <p>Tipo: ${dados.results[0].type}</p>
                
                <p>Status: ${dados.results[0].status}</p>

                <p>Gênero: ${dados.results[0].gender}</p>

                <p>Origem: ${dados.results[0].origin.name}</p>

                <p>Locação: ${dados.results[i].location.name}</p>
                
                </div>

            `;

            }

        });

}

function dragon() {

    resultado.innerHTML = "";

    fetch("https://dragonball-api.com/api/characters?page=1&limit=6")
        .then(resposta => resposta.json())
        .then(dados => {

            for (let i = 0; i < 6; i++) {

                resultado.innerHTML += `

            <div class="card">

                <img src="${dados.items[i].image}">

                <h2>Nome:${dados.items[i].name}</h2>

                <p>Raça:${dados.items[i].race}</p>

                <p>Ki:${dados.items[i].ki}</p>

                <p>Genêro:${dados.items[i].gender}</p>

                <p>Estado:${dados.items[i].affiliation}</p>

                <p>Poder Máximo: ${dados.items[i].maxKi}</p>
                
                

                


                

              

            </div>

            `;

            }

        });

}

function buscar() {

    let nome = document.getElementById("nome").value;

    resultado.innerHTML = "";

    fetch("https://rickandmortyapi.com/api/character/?name=" + nome)
        .then(resposta => resposta.json())
        .then(dados => {

            resultado.innerHTML += `

        <div class="card">

            <img src="${dados.results[0].image}">

            <h2>${dados.results[0].name}</h2>
            
            <p>Espécie:${dados.results[i].species}</p>
                
            
        </div>

        `;

        })

        .catch(() => {

            resultado.innerHTML = `<h2>Personagem não encontrado</h2>`;

        });

}
function modoDark() {

    document.body.classList.toggle("dark");

}