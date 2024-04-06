

let todos = [];

/** @type {import('./$types').PageServerLoad} */
 export async function load() {
    try {
      const response = await fetch('http://127.0.0.1:8080/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      todos = await response.json();
    } catch (error) {
      console.error(error);
    }
    
    return{
        todos
    }
  }