const urlProduct = 'https://dummyjson.com/products?limit=8';
const urlPost = 'https://dummyjson.com/posts?limit=1';
const urlPost2 = 'https://dummyjson.com/posts?limit=4';

fetch(urlProduct)
  .then((res) => res.json())
  .then((result) => {
    item = result;
    renderProduct(result.products);
  });

fetch(urlPost)
  .then((res) => res.json())
  .then((result) => {
    post = result;
    principalPost(result.posts);
  });

fetch(urlPost2)
  .then((res) => res.json())
  .then((result2) => {
    post2 = result2;
    secondPost(result2.posts);
  });

function principalPost(post1) {
  const postPrincipal = document.querySelector('#postPrincipal');
  const post = post1;
  for (let i = 0; i < post.length; i++) {
    const postTitle = post[i].title;
    const body = post[i].body;

    const postFile = document.createElement('div');
    postFile.className = 'card mb-4';
    postFile.innerHTML = `
                    
                        <a href="#!">
                            <img class="card-img-top " src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                                alt="..."></a>
                        <div class="card-body">
                            <div class="small text-muted" >January 1, 2023</div>
                            <h2 class="card-title">${postTitle}</h2>
                            <p class="card-text" id="postText">${body}</p>
                            <a class="btn btn-primary" href="#!">Read more →</a>
                        </div>

                    `;
    postPrincipal.appendChild(postFile);
  }
}

function renderProduct(array) {
  const container = document.getElementById('productContainer');
  const products = array;

  for (let i = 0; i < array.length; i++) {
    const list = products[i].images;
    const title = products[i].title;
    const price = products[i].price;

    const card = document.createElement('div');
    card.className = 'col mb-5';
    card.innerHTML = `
        <div class="card h-100">
          <img class="card-img-top dg-wh" src="${list[0]}" alt="...">
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder" id="title">${title}</h5>
              <span id="price">${price}</span>
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
          </div>
        </div>
      `;
    container.appendChild(card);
  }
}

function secondPost(post2) {
  const postSecond = document.querySelector('#postSecond');
  const post = post2;
  for (let i = 0; i < post.length; i++) {
    const postTitle = post[i].title;
    const postBody = post[i].body;
    const postFile2 = document.createElement('div');
    postFile2.className = 'col-lg-6';
    postFile2.innerHTML = `
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top"src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..."></a>
                <div class="card-body">
                    <div class="small text-muted">January 1,    2023</div>
                    <h2 class="card-title h4">${postTitle}</h2>
                    <p class="card-text">${postBody}</p>
                    <a class="btn btn-primary" href="#!">Read more →</a>
                </div>
                </div>
                      `;
    postSecond.appendChild(postFile2);
  }
}
