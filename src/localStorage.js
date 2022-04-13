const storage = {
  saveTodos(cities) {
    return localStorage.setItem(
      'todos',
      JSON.stringify(cities)
    );
  },
  getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  },
}

export default storage