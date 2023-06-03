const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    
    let promise = await fetch("https://jsonplaceholder.typicode.com/posts", options);

    let response = await promise.json();
    return response;
}

const getTodo = async (id) => {
    id = 7;
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let resp = await response.json();

    return resp;
}

const run = async () => {
    let todo = {
        title: "Harry",
        body: "Bhai",
        userId: 11
    }
    let response = await createTodo(todo);
    console.log(response);
    console.log(await getTodo(101));
}

run();