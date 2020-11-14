
export function renderStoreListFromMap(list, map) {
  cleanStoreList()
  list.forEach(storeId => renderElement(map.get(storeId)))
}

function renderElement(store) {
  const element = buildElement(store)
  window.container.append(element)
}

function buildElement({ title, description, image_path, image, category, id, price, info, order }) {

    let image_div = '';

    if (image) {
        image_div = `
            <div class="bg-white md:rounded-r-none rounded-lg">
                <img loading="lazy"class=" object-cover object-left w-full h-full rounded-lg md:w-56 md:h-full md:rounded-r-none" src="images/${image_path}" alt="${title}">
            </div>
        `;

    }

    const template = `
    
     <div class="mx-2 mt-4 rounded-lg md:mx-0 md:w-1/2 md:flex md:bg-white ">
        
                 ${image_div}

                <div class="relative w-full p-2 mx-2 -mt-2 bg-white rounded-lg shadow-lg md:bg-transparent">
                    <h2 class="text-xl font-semibold tracking-tight text-base uppercase">${title} </h2>
                    <p class="mt-2 leading-snug text-gray-700 ">
                    ${description}
                    </p>
                   
                    <div class="mt-2 text-lg font-semibold text-right text-base">${price}</div>
                   
                </div>
        </div>`;

 
  const store = document.createElement('div')
  store.innerHTML = template
  return store.firstElementChild
}

function cleanStoreList() {
  window.container.innerHTML = ''
}

export default function renderStoreList(list) {
  cleanStoreList()
  // console.table(list, ['title', 'poster_path', 'vote_average', 'id'])
  list.forEach(renderElement)
}