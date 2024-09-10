//Criação de Promessa

const myPromise = new Promise((resolve, reject)=> {
    const nome = "Brenda"

    if(nome === "Brenda"){
        resolve(`Usuário ${nome} encontrado`)
    } else {
        reject(`Usuário ${nome} não encontrado`)
    }
})

myPromise.then((data) => {
    console.log(data);  
})

//Encadeamento de Then's

const myPromise2 = new Promise((resolve, reject)=> {
    const nome = "Brenda"

    if(nome === "Brenda"){
        resolve(`Usuário ${nome} encontrado`)
    } else {
        reject(`Usuário ${nome} não encontrado`)
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada);
    
})

// Retorno CATCH

const myPromise3 = new Promise((resolve, reject)=> {
    const nome = "Lucas"

    if(nome === "Brenda"){
        resolve(`Usuário ${nome} encontrado`)
    } else {
        reject(`Usuário ${nome} não encontrado`)
    }
})

myPromise3.then((data) => {
    console.log(data);  
}).catch((erro) => {
    console.log(`Aconteceu um erro! ${erro}`)
})

//Resolve várias promessas com .all (retorna apenas quando todas estiverem resolvidas, ou seja, só vai retornar quando o p2 estiver ok)

const p1 = new Promise((resolve, reject) => {
    resolve('P1 Ok')
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 Ok')
    }, 2000)   
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 Ok')
})

const resolveAll = Promise.all ([p1, p2, p3]).then((data) => {
    console.log(data);
    
})

// Resolve várias promessas com race (retorna a primeiro que for resolvida)

