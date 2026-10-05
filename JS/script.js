const botaoVoltar = document.querySelector(".voltar");
const sectionDetalhesProduto = document.querySelector(".produto__detalhes");
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

    card.addEventListener("click", () => {
      // mostrar botão e detalhes do produto
      botaoVoltar.style.display = "block"
      sectionDetalhesProduto.style.display = "grid";
    });
  });
};

generateCards();
