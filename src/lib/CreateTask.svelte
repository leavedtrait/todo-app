<script>
    export let todos;
    //let todoclone = todos;
    let description = '';
    let title = '';
    let completed=false;

    $:handleAddTodo = ()=> {
        let newTodo ={
            Title: title,
            Description: description,
            Completed: completed
        };
        todos = [...todos, newTodo];
        //todos.push(newTodo);
        title = ''
        description=''
        console.log(todos)

        
    }
</script>

<div class="task">
    <form action="?/addTodo" on:submit|preventDefault={handleAddTodo}>
        <div class="input-container">
            <input name="title" type="text" bind:value={title} placeholder="Title" class="input" />
        </div>
        <br />
        <div class="input-container">
            <input name="description" type="text" bind:value={description} placeholder="Description" class="input" />
        </div>
        <br />
        <button type="submit" class="submit">Add Todo</button>
    </form>
</div>

<style>
    .task {
        
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 8px;
        padding: 20px;
        width: 22.5em;
        margin: left; /* Center the task container */
    }
    .task:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    .input-container {
        text-align: center; /* Center the input fields */
    }

    input {
        width: 80%; /* Adjusted width */
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: border-color 0.3s ease;
    }

    input:focus {
        border-color: #007bff;
        outline: none;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
