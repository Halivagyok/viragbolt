const flowers = "https://viragbolt-backend.onrender.com/api/flowers";
const categories = "https://viragbolt-backend.onrender.com/api/categories";

let products = [];
getData(categories, renderCateg);
getData(flowers, product)

function renderCateg(data){
    console.log(data);
    let container = document.querySelector(".categ")
    data.forEach(e => {
        container.innerHTML += `
        <button type="button" onclick="renderFlowers(this)" class="tisztelem text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${e.nev}</button>
        `
    });
}

function product(e){ products = e } 

function renderFlowers(e) {
    let cards = document.querySelector(".cards")
    cards.innerHTML = ""
    const filtered = products.filter(el => el.kategoria_nev === e.innerText);  
    console.log(filtered);
    filtered.forEach(el => {
        cards.innerHTML += `
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a>
                <img class="rounded-t-lg" src="${el.kepUrl}" alt="" />
            </a>        
            <h5 class="flex justify-center my-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${el.nev}</h5>
        </div>
        `
    })
        
}