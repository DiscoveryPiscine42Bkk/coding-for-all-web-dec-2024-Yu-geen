$(document).ready(function() {
    const $todoList = $('#ft_list');
    const $newTodoButton = $('#newTodo');

    function loadTodos() {
        const savedTodos = document.cookie
            .split('; ')
            .find(row => row.startsWith('todos='));
        if (savedTodos) {
            const todos = JSON.parse(decodeURIComponent(savedTodos.split('=')[1]));
            todos.reverse().forEach(todo => addTodoToDOM(todo));
        }
    }

    function saveTodos() {
        const todos = [];
        $('.todo').each(function() {
            todos.push($(this).text());
        });
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=31536000`;
    }

    function addTodoToDOM(todoText) {
        const $todoDiv = $('<div class="todo"></div>').text(todoText);

        $todoDiv.on('click', function() {
            if (confirm('Do you want to remove this TO DO?')) {
                $todoDiv.remove();
                saveTodos();
            }
        });

        $todoList.prepend($todoDiv);
    }

    $newTodoButton.on('click', function() {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText) {
            addTodoToDOM(todoText);
            saveTodos();
        }
    });

    loadTodos();
});
