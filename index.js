import process from "node:process"

const verb = process.argv[2]
const url = "https://fakestoreapi.com/products/"

const getController = async () => {

    const resource = process.argv[3].split("/");
    const id = resource[1]
    
    if(id){
        const response = await fetch(url + id);
        const data = await response.json();
        return console.log(data)
    } 
    
    const response = await fetch(url);
    const data = await response.json();
    return console.log(data)
    
}

const postController = async () => {
    const title = process.argv[4]
    const price = process.argv[5]
    const category = process.argv[6]
    
    if(!title || !price || !category){
        return console.log("Debes ingresar todos los campos")
    }
    
    const newProduct = {
        title,
        price,
        category
    }
    
    const method = "POST";
    const headers = {
        "Content-Type": "application/json"
    };
    const body = JSON.stringify(newProduct);
    
    
    const response = await fetch(url, {
        method,
        headers,
        body
    });
    const data = await response.json();
    return console.log(data)
    
    
}

const deleteController = async () => {
    const resource = process.argv[3].split("/");
    const id = resource[1]

    const method = "DELETE";
    
    if(!id){
        return console.log("Debes ingresar un id");
    } 

    const response = await fetch(url + id, {
        method
    });
    const data = await response.json();
    return console.log(data)

}

switch(verb){
    case "GET":
        getController();
    break;
    case "POST":
        postController();
    break;
    case "DELETE":
        deleteController();
    break;

}
