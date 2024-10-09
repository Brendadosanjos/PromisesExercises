const loginUser = (email, password, callback) => {
    setTimeout(()=> {
        console.log("User Logged!")
        callback({email})
    }, 1500)
    
    console.log("after setTimeout")
}

const user = loginUser("xxx@gmail.com", 12345, (user)=> {console.log ({user})})



//com erro 

const loginUser2 = (email, password, onSucess, onError) => {
    setTimeout(()=> {
        const error = true 

        if(error) {
            return onError(new Error("error in login"))
        }

        console.log("User Logged!")
        onSucess({email})
    }, 1500)

}

const user2 = loginUser2("xxx@gmail.com", 12345, (user)=> {console.log ({user})}, (error)=> {console.log({error})})
