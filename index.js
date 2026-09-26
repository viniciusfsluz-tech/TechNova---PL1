// ==============================
// DADOS
// ==============================

// Array com os nomes dos produtos da loja.
const produtos = [
    "Mouse",
    "Teclado",
    "Webcam",
    "Headset",
    "Monitor",
    "SSD",
    "Placa de Video",
    "Notebook"
];

// Array com os preços correspondentes aos produtos.
const precos = [
    80.00,
    150.00,
    180.00,
    250.00,
    900.00,
    350.00,
    2500.00,
    3500.00
];

// Array com as quantidades disponíveis em estoque.
const estoque = [
    25,
    18,
    12,
    20,
    10,
    15,
    5,
    8
];

// Matriz regular contendo as vendas da semana.
// Todos os produtos possuem uma quantidade de vendas.
const vendas = [
    [10, 5, 3, 8, 2, 4, 1, 2]
];

// Matriz irregular contendo os produtos de cada pedido.
// Cada pedido pode possuir uma quantidade diferente de itens.
const pedidos = [
    ["Mouse", "Teclado"],
    ["Webcam", "Headset", "Monitor"],
    ["Teclado"],
    ["Mouse", "Webcam", "Monitor", "SSD"],
    ["Headset", "Placa de Video"]
];


// ==============================
// PESQUISA SEQUENCIAL
// ==============================

// Procura um produto no array e retorna a posição em que ele foi encontrado.
function PesquisaSequencial(produtos, produtoProcurado) {

    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i] === produtoProcurado) {
            return i;
        }

    }

    return -1;
}


// ==============================
// TROCA DE ELEMENTOS
// ==============================

// Troca a posição de dois elementos dentro de um array.
function Trocar(array, posicao1, posicao2) {

    let temp = array[posicao1];

    array[posicao1] = array[posicao2];

    array[posicao2] = temp;
}


// ==============================
// PESQUISA BINÁRIA
// ==============================

// Procura um preço em um array ordenado utilizando a pesquisa binária.
function PesquisaBinaria(precos, valorProcurado) {

    let inicio = 0;

    let fim = precos.length - 1;

    while (inicio <= fim) {

        let meio = Math.floor((inicio + fim) / 2);

        if (precos[meio] === valorProcurado) {
            return meio;
        }

        if (precos[meio] < valorProcurado) {

            inicio = meio + 1;

        } else {

            fim = meio - 1;

        }
    }

    return -1;
}


// ==============================
// CÁLCULO DE PRODUTO
// ==============================

// Calcula o valor total de um produto multiplicando o preço pela quantidade.
function CalcularValorProduto(preco, quantidade) {

    return preco * quantidade;
}


// ==============================
// PRODUTOS EM ESTOQUE
// ==============================

// Exibe no console todos os produtos, seus preços e suas quantidades em estoque.
console.log();

console.log("====== PRODUTOS EM ESTOQUE ======");

for (let i = 0; i < produtos.length; i++) {

    console.log(
        `${produtos[i]} - R$ ${precos[i].toFixed(2)} - Estoque: ${estoque[i]}`
    );

}


// ==============================
// PESQUISA SEQUENCIAL
// ==============================

// Utiliza a função de pesquisa sequencial para encontrar um produto.
console.log();

console.log("===== PESQUISA SEQUENCIAL =====");

let produtoProcurado = "Monitor";

let posicao = PesquisaSequencial(
    produtos,
    produtoProcurado
);

if (posicao !== -1) {

    console.log(`Produto encontrado: ${produtos[posicao]}`);

    console.log(`Posição: ${posicao}`);

    console.log(`Preço: R$ ${precos[posicao].toFixed(2)}`);

    console.log(`Estoque: ${estoque[posicao]}`);

} else {

    console.log("Produto não encontrado.");

}


// ==============================
// BUBBLE SORT
// ==============================

// Ordena os produtos pelo preço e mantém os dados relacionados na mesma posição.
for (let i = 0; i < precos.length - 1; i++) {

    for (let j = 0; j < precos.length - 1 - i; j++) {

        if (precos[j] > precos[j + 1]) {

            Trocar(precos, j, j + 1);

            Trocar(produtos, j, j + 1);

            Trocar(estoque, j, j + 1);

            Trocar(vendas[0], j, j + 1);
        }
    }
}


// ==============================
// PRODUTOS ORDENADOS
// ==============================

// Exibe os produtos depois da ordenação pelo preço.
console.log();

console.log("===== PRODUTOS ORDENADOS POR PREÇO =====");

for (let i = 0; i < produtos.length; i++) {

    console.log(
        `${produtos[i]} - R$ ${precos[i].toFixed(2)} - Estoque: ${estoque[i]}`
    );

}


// ==============================
// PESQUISA BINÁRIA
// ==============================

// Utiliza a pesquisa binária para localizar um preço no array ordenado.
console.log();

console.log("===== PESQUISA BINÁRIA =====");

let precoProcurado = 900.00;

let posicaoBinaria = PesquisaBinaria(
    precos,
    precoProcurado
);

if (posicaoBinaria !== -1) {

    console.log(
        `Preço encontrado: R$ ${precos[posicaoBinaria].toFixed(2)}`
    );

    console.log(
        `Produto: ${produtos[posicaoBinaria]}`
    );

} else {

    console.log("Preço não encontrado.");

}


// ==============================
// VENDAS DA SEMANA
// ==============================

// Exibe a quantidade de unidades vendidas de cada produto durante a semana.
console.log();

console.log("===== VENDAS DA SEMANA =====");

for (let produto = 0; produto < vendas[0].length; produto++) {

    console.log(
        `${produtos[produto]}: ${vendas[0][produto]} unidades`
    );

}


// ==============================
// PEDIDOS
// ==============================

// Exibe os produtos presentes em cada pedido.
console.log();

console.log("===== PEDIDOS =====");

for (let pedido = 0; pedido < pedidos.length; pedido++) {

    console.log(`Pedido ${pedido + 1}:`);

    for (let item = 0; item < pedidos[pedido].length; item++) {

        console.log(pedidos[pedido][item]);

    }
}


// ==============================
// FUNÇÃO PARA CALCULAR ESTOQUE
// ==============================

// Calcula o valor total dos produtos disponíveis no estoque.
function CalcularValorEstoque(preco, quantidade) {

    return preco * quantidade;
}


// ==============================
// VALOR DO ESTOQUE
// ==============================

// Calcula e exibe o valor total de cada produto disponível no estoque.
console.log();

console.log("===== VALOR DO ESTOQUE =====");

for (let i = 0; i < produtos.length; i++) {

    let valorTotal = CalcularValorEstoque(
        precos[i],
        estoque[i]
    );

    console.log(
        `${produtos[i]}: R$ ${valorTotal.toFixed(2)}`
    );

}


// ==============================
// CÁLCULO POR VALOR
// ==============================

// Utiliza a função de cálculo para descobrir o valor de uma compra.
console.log();

console.log("===== CÁLCULO POR VALOR =====");

let precoProduto = 150.00;

let quantidadeProduto = 2;

let totalCompra = CalcularValorProduto(
    precoProduto,
    quantidadeProduto
);

console.log(
    `${quantidadeProduto} unidades de um produto de R$ ${precoProduto.toFixed(2)}: R$ ${totalCompra.toFixed(2)}`
);


// ==============================
// FILTER
// ==============================

// Cria um novo array apenas com os valores de estoque menores ou iguais a 5.
console.log();

console.log("===== ATENÇÃO AO ESTOQUE =====");

const estoqueBaixo = estoque.filter(
    elemento => elemento <= 5
);

console.log(estoqueBaixo);


// ==============================
// SOME
// ==============================

// Verifica se existe pelo menos um produto com estoque baixo.
const existeEstoqueBaixo = estoque.some(
    elemento => elemento <= 5
);

if (existeEstoqueBaixo === true) {

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i] <= 5) {

            console.log(`${produtos[i]} deve ser restocado`);

        }
    }
}


// ==============================
// MAP
// ==============================

// Cria um novo array adicionando 10% de taxa de entrega aos preços.
console.log();

const porcentagem = 10;

const TaxaEntrega = precos.map(
    elemento => elemento + elemento * porcentagem / 100
);

for (let i = 0; i < TaxaEntrega.length; i++) {

    console.log(
        `Nome do produto: ${produtos[i]}, seu valor com a taxa: R$ ${TaxaEntrega[i].toFixed(2)}`
    );

    console.log();
}


// ==============================
// INCLUDES
// ==============================

// Verifica se o produto procurado existe no array de produtos.
const produtoProcurado1 = "Monitor";

const existe = produtos.includes(produtoProcurado1);

if (existe === true) {

    console.log(`O produto ${produtoProcurado1} existe`);

} else {

    console.log(`O produto ${produtoProcurado1} não existe no estoque`);

}


// ==============================
// CONCAT
// ==============================

// Junta a lista de produtos atuais com a lista de produtos antigos.
const ProdutosAntigos = [
    "Impressora",
    "Pen-Drive",
    "Processador",
    "Ram",
    "placa de rede"
];

const TodosOsProdutos = produtos.concat(ProdutosAntigos);

console.log("====== TODOS OS PRODUTOS DA LOJA ======");

for (let i = 0; i < TodosOsProdutos.length; i++) {

    if (ProdutosAntigos.includes(TodosOsProdutos[i])) {

        console.log(`${TodosOsProdutos[i]} - Antigo`);

    } else {

        console.log(`${TodosOsProdutos[i]} - Atual`);

    }
}


// ==============================
// FUNÇÃO POR EXPRESSÃO
// ==============================

// Cria uma função por expressão para calcular o valor de uma compra.
const CalcularCompra = function(preco, quantidade) {

    return preco * quantidade;

};

console.log();

console.log("==== FUNÇÃO POR EXPRESSÃO ====");

let valorCompra = CalcularCompra(150, 3);

console.log(
    `Valor da compra: R$ ${valorCompra.toFixed(2)}`
);