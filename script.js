//Variavel-Objeto que armazena o nome e valor de cada item
var itens = [];

//onde é chamado o botão adicionar e ativada a função de adição dos dados
document.querySelector('input[type=submit]').addEventListener('click',()=>{

    //Variaveis que recebem os dados do input
    var nomeProduto = document.querySelector('input[name=name_produto]');
    var valorProduto = document.querySelector('input[name=valor_produto]');

    //onde é inserido os dados no objeto
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    //variavel que puxa o item html onde os dados serão exibidos
    let listaProdutos = document.querySelector('.lista-produtos');
    //variavel que gera o valor total
    let soma = 0;

    //onde é zerado todo o conteudo do item html lista de produtos
    listaProdutos.innerHTML = '';

    //onde o objeto é mapeado para inserir os itens na pagina
    itens.map((val)=>{

        //Soma do valor total de cada item
        soma += parseFloat(val.valor);

        //Onde o valor do item é tratado e formatado
        valItem = val.valor;
        valItem = parseFloat(valItem);
        valItem = valItem.toFixed(2);

        //onde é gerado e adicionado o html de cada item
        listaProdutos.innerHTML+=`
        <div class="lista-single">
        <h3 class="item">`+val.nome+`</h3>
        <h3 class="preco">R$`+valItem+`</h3>
        </div>
        `;
   
    })
    
    //Onde a soma é formatada
    soma = soma.toFixed(2);

    //O input é zerado
    nomeProduto.value = "";
    valorProduto.value = "";

    //Onde é encontrado o elemento html do total e inserido o valor da atual soma
    let elSoma = document.querySelector('.total-valor');
    elSoma.innerHTML = 'R$'+soma;
});

document.querySelector('.btLimpar').addEventListener('click',()=>{
    itens = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.total-valor').innerHTML = "R$0,00";
})