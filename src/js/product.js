const imgProduct = document.querySelector('#imgProduct');
const imgProductSrc = document.querySelector('#imgProductSrc');
const title = document.querySelector('#title');
const rate = document.querySelector('#rate');
const price = document.querySelector('#price');
const description = document.querySelector('#description');
const stock = document.querySelector('#stock');

fetch('https://dummyjson.com/products?limit=1')
  .then((res) => res.json())
  .then((result) => {
    item = result;
    console.log(result);
    products = result.products[0];
    imgProduct.setAttribute('href', `${products.images[0]}`);
    imgProductSrc.src = `${products.images[0]}`;
    console.log(products.images[0]);
    RenderImgCard(products.images);
    title.textContent = ` ${products.title}`;
    rate.textContent = `${products.rating}`;
    rating(Math.trunc(products.rating));
    price.textContent = `${products.price} €`;
    description.textContent = `${products.description}`;
    stock.textContent = `${products.stock}`;
  });

function rating(rate) {
  let iconeRate = document.getElementById('rate');
  const icone = document.createElement('i');
  switch (rate) {
    case 1:
      iconeRate.innerHTML = '⭐';
      break;
    case 2:
      iconeRate.innerHTML = '⭐⭐';
      break;
    case 3:
      iconeRate.innerHTML = '⭐⭐⭐';
      break;
    case 4:
      iconeRate.innerHTML = '⭐⭐⭐⭐';
      break;
    case 5:
      iconeRate.innerHTML = '⭐⭐⭐⭐';
      break;
  }
  iconeRate.appendChild(icone);
}

function RenderImgCard(arg) {
  for (let index = 0; index < arg.length; index++) {
    const element = arg[index];
    console.log(element);

    let imgCard = document.getElementById('imgCard');
    const img = document.createElement('div');
    img.innerHTML = `
    <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"
    href="${element}">
    <img width="60" height="60" class="rounded-2" src="${element}">
    </a>

    `;
    imgCard.appendChild(img);
  }
}
