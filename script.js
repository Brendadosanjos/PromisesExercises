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

//Resolve várias promessas com ALL (retorna apenas quando todas estiverem resolvidas, ou seja, só vai retornar quando o p2 estiver ok)

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
//Resolve várias promessas com RACE (retorna a primeira que for resolvida)

const p4 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("P4 ok!")
    },1000)
})

const p5 = new Promise((resolve, reject) => {
    resolve("P5 ok!")
})

const p6 = new Promise((resolve, reject) => {
    resolve("P6 ok!")
})

const revolveAllRace = Promise.race ([p4, p5, p6]).then((data) => {
    console.log(data);
    
})

//Fetch request na API do GITHUB
//Fetch API

const userName = "brendadosanjos"
fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json',
    },
}).then ((reponse) => {
    console.log(typeof reponse)
    console.log(reponse)
    return reponse.json()
}).then((data)=>{
    console.log(data)
    console.log(`O nome do usuário é ${data.name}`);
}).catch((erro) => {
    console.log('Houve algum erro');
})