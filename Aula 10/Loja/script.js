const btnMenu = document.querySelector("#btn-menu");
const menuLateral = document.querySelector("#menu-lateral");

btnMenu.addEventListener("click", () => {
    if(menuLateral.style.left === "" || menuLateral.style.left === "-200px") {
        menuLateral.style.left = "0";
    }
    else {
        menuLateral.style.left = "-200px"
    }

    /*console.log(menuLateral.style.left);*/
}); 

const produto = [
    {
        imagem: "Item 2.jpg",
        nome: "Chevrolet Impala 1959"
    },
    {
        imagem: "Item 3.jpg",
        nome: "Dodge Challenger R/T 440 Six Pack de 1970"
    },
    {
        imagem: "Item 4.jpg",
        nome: "Porsche 911 Turbo S da geração 992"
    },
];

const card = document.querySelector(".box");
const main =  document.querySelector("main");

produto.forEach((produto) => {
    let novocard = card.cloneNode(true);
    
    novocard.querySelector("img").src = produto.imagem;
    novocard.querySelector("p").innerHTML = produto.nome;

    main.appendChild(novocard);
});

const busca = document.querySelector("#busca");

busca.addEventListener("keyup", () => {
    main.childNodes.forEach((box) => {
        if(box.innerHTML.contains(busca.value)) {
            box.style.display = "flex";
        }
        else {
            box.style.display = "none"; 
        }
    });
});