function asyncFunction () {
    setTimeout(()=> {
        console.log("função assincrona")
    },300)
}

console.log("Início")
asyncFunction()
console.log("fim")

//-------- SINTAXE
function primeiraFuncao(){
    return new Promise((resolve)=>
        setTimeout(()=>{
            console.log('Esperou isso aqui');
            resolve()
        })
    )
}

async function segundaFuncao() {
    console.log('Iniciou');

    await primeiraFunção()

    console.log('Terminou');

}

segundaFuncao

//prático usando fetch
function getUser(id) {
    return fetch(`https://regres.in/api/users?id=$id{id}`)
        .then(data => data.json())
        .catch(err => console.log(err))
}

async function showUserName(id) {
   try{
    const user = await getUser(id)

    console.log(`O novo usuário é ${user.data.first_name}`);
   }catch(err){
    console.log(`Erro: ${err}`);
    
   }
}

showUserName(3)