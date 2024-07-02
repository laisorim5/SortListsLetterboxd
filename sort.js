// Objeto que mapeia nomes de lista para URLs correspondentes
var linksListas = {
    "Laís Souza Amorim eu te amo [Vini]": "https://letterboxd.com/vini0804/list/lais-souza-amorim-eu-te-amo/by/shuffle",
    "Laís' Watchlist": "https://letterboxd.com/laisorim/watchlist/by/shuffle/",
    "Recomendations [Laís]": "https://letterboxd.com/laisorim/list/indicacoes/by/shuffle/",
    "Vini Favs": "https://letterboxd.com/vini0804/list/os-filmes-que-mais-me-marcaram/by/shuffle/"
    // Adicione mais listas conforme necessário
};


function sortearListas() {
    var listasSelecionadas = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(function(checkbox) {
        listasSelecionadas.push(checkbox.value);
    });

    if (listasSelecionadas.length === 0) {
        document.getElementById("resultado").innerText = "Por favor, selecione pelo menos uma lista.";
        return;
    }

    var listaSorteada = listasSelecionadas[Math.floor(Math.random() * listasSelecionadas.length)];
    document.getElementById("resultado").innerText = "Lista sorteada: " + listaSorteada;

    // Obter o URL correspondente à lista sorteada
    var linkListaSorteada = linksListas[listaSorteada];

    // Redirecionar o navegador para o link da lista sorteada
    window.location.href = linkListaSorteada;
}