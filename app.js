let api = []
let box = document.getElementById('box')


// let chack = fetch('https://fakestoreapi.com/products');
//  chack.then( async (res)=>{
// return await  res.json()
// });





fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                for (const x of json) {
                   box.innerHTML += `<div class="card w-[20%] h-[50vh] rounded-xl bg-blue-100 flex  justify-around p-3 flex-col">
                <img src="${x.image}" class="w-/5 object-contain  rounded-lg h-[25vh] rounded-xl " alt="">
                <h1 class="font-bold  font-mono">${x.title.slice(0,11)}</h1>
                <p class="">${x.category}</p>
                <p class="">${x.rating.rate}</p>
                <button class="bg-blue-900  text-red-100 rounded-lg p-1 font-bold font-serif" onclick="add(this)">Add Card</button>
            </div>`
                }
            });
            // console.log(api);

{/* <div class="card w-[20%] h-[50vh] rounded-xl bg-red-200 flex  justify-around p-3 flex-col">
                <img src="" class="w-/5 rounded-xl " alt="">
                <h1 class="font-bold  font-mono">titel</h1>
                <p class="">price</p>
                <p class="">reating</p>
                <button class="bg-blue-900  text-red-100 rounded-lg p-1 font-bold font-serif" onclick="add(this)">Add Card</button>
            </div> */}

