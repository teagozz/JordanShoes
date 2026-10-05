const botaoVoltar = document.querySelector(".voltar");
const sectionDetalhesProduto = document.querySelector(".produto__detalhes");
const sectionProdutos = document.querySelector(".produtos");
// ocultar seção e botão de detalhes do produto
botaoVoltar.style.display = "none";
sectionDetalhesProduto.style.display = "none";

const formatCurrency = (number) => {
  return number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

const getProducts = async () => {
  const response = await fetch("../JS/products.json");
  const data = await response.json();
  return data;
};

const generateCards = async () => {
  const products = await getProducts();

  products.map((product) => {
    let card = document.createElement("div");
    card.id = product.id;
    card.classList.add("card__produto");

    card.innerHTML = `
        <figure>
            <img src="/images/${product.image}" alt="${product.product_name}" />
        </figure>

        <div class="card__produto_detalhes">
            <h4>${product.product_name}</h4>
            <h5>${product.product_model}</h5>
        </div>

        <h6 class="card__produto_price">${formatCurrency(product.price)}</h6>
    `;

    const listaProdutos = document.querySelector(".lista__produtos");
    listaProdutos.appendChild(card);

    card.addEventListener("click", (e) => {
      // ocultar produtos e mostrar botão e detalhes do produto
      sectionProdutos.style.display = "none";
      botaoVoltar.style.display = "block";
      sectionDetalhesProduto.style.display = "grid";

      // identificar qual card foi clicado
      const cardClicado = e.currentTarget;
      const idProduto = cardClicado.id;
      const produtoClicado = products.find(
        (product) => product.id == idProduto,
      );
      // preencher os dados de detalhes do prod
      preencherDadosProduto(produtoClicado);
    });
  });
};

generateCards();

botaoVoltar.addEventListener("click", () => {
  botaoVoltar.style.display = "none";
  sectionDetalhesProduto.style.display = "none";
  sectionProdutos.style.display = "flex";
});

const preencherDadosProduto = (product) => {
  // preencher imagens, nome modelo e preço
  const images = document.querySelectorAll(
    ".produto__detalhes_imagens figure img",
  );
  const imagesArray = Array.from(images);
  imagesArray.map((image) => {
    image.src = `./images/${product.image}`;
  });

  const titulo = document.querySelector(".produto__detalhes_info .detalhes h4");
  const descricao = document.querySelector(
    ".produto__detalhes_info .detalhes h5",
  );
  const preco = document.querySelector(".produto__detalhes_info .detalhes h6");

  titulo.innerText = product.product_name;
  descricao.innerText = product.product_model;
  preco.innerText = formatCurrency(product.price);
};
