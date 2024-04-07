<script>
    import CreateTask from "$lib/CreateTask.svelte";
    import Task from "$lib/Task.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let previousTodos = data.todos;

    let todos = previousTodos;
    

    $: console.log(todos.length);
</script>

<main>
    <h3>Basic Todo App Svelte 🧡🧡 + Go 💙💙</h3>
    <h5>by Johnson macharia</h5>
    <br />
    {#if todos.length > 0}
        {#each todos as description}
            <Task
             title={description.Title}
                description={description.Description}
            />
            <br />
        {/each}
        <br />
        <CreateTask bind:todos={todos} />
     {:else}
        <h4>Please create a todo!!</h4>

        <CreateTask  bind:todos={todos} />
    {/if}
</main>

<style>
    main {
        text-align: left;
        padding: 1.5em;
        
        display: block;
        position: relative;
    }
/* 
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    } */
</style>
