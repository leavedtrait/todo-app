

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

  return {
    todos
  }
}


/** @type {import('./$types').Actions} */
export const actions = {
  addTodo: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const description = data.get('description');

    try {
      const response = await fetch('http://127.0.0.1:8080/addTodos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Id: "",
          Title: title.trim(),
          Description: description.trim(),
          Completed: false
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      // Assuming your API returns the newly created todo object
      const newTodo = await response.json();
      todos = [...todos, newTodo];


    } catch (error) {
      console.error(error);
    }


    return { success: true };
  }
};