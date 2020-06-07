function dados(){
      let employee_name= document.getElementById("nome");
            

let dados = prompt("ss?");    
    
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(

   



data =>{ 
    for.forEach(pessoa => {

        nome.innerHTML = pessoa.employee_name;
    console.log(pessoa);
    console.log(data);
    }

    ))
   
let receita = {
    titulo: "Bolo de cenoura",
    porcoes: "1",
    ingredientes: ['cenoura','açucar','farinha','ovos']
}

console.log(receita.titulo);
console.log(receita.porcoes);
console.log(receita.ingredientes);

receita.ingredientes.forEach(ingrediente => {
    console.log(ingrediente);
})



let livros = [
    {
        titulo: "ebook",
        autor: "jose",
        livroLido: false
    },    
    {   
        titulo: "prisão",
        autor: "fernanda",
        livroLido: false,
    },
    {
        titulo: "duvidas",
        autor: "joao",
        livroLido: false,
    },
    {
        titulo: "arquitetura",
        autor: "michel",
        livroLido: true,
    }
];



livros.forEach( livro => {
    if ( livro.livroLido ) 
        console.log("Você já leu este livro");     
    else 
        console.log("Você não leu este livro");
    console.log(livro.titulo);
    console.log(livro.autor);
})




}




    )}