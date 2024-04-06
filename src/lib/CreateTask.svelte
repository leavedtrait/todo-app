<script>
    let todos = [];
    let description = '';
    let title = '';

    function handleAddTodo() {
        todos = [
            ...todos,
            {
                title: title.trim(),
                description: description.trim()
            }
        ];
        // Clear input fields after adding todo
        title = '';
        description = '';
    }
</script>

<div class="task">
    <form on:submit|preventDefault={handleAddTodo}>
        <div class="input-container">
            <input type="text" bind:value={title} placeholder="Title" class="input" />
        </div>
        <br />
        <div class="input-container">
            <input type="text" bind:value={description} placeholder="Description" class="input" />
        </div>
        <br />
        <button type="submit" class="submit">Add Todo</button>
    </form>
</div>

<style>
    .task {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow */
        border-radius: 8px;
        padding: 20px;
        width: 22.5em;
        margin: left; /* Center the task container */
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
