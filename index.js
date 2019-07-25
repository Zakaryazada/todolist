var todos = []

  function addNewTodo (t) {
    let a = {
    text: t,
    status : "active"

    }

    todos.push(a)
  }

  function changeStatus (index){
    if ( todos[index].status === 'active'){
      todos[index].status = 'completed' 
    }else {
      todos[index].status = 'active' 
    }
  }


  function removeTodo(index){
    todos.splice(index, 1)
  }

  function clearCompleted (){
    todos=todos.filter(function(element){
      return element.status == 'active'
      
    })

  }

  function showTodos() {
    $('#todolar').html()
    for( let i=0 ; i<todos.length ; i++){
      let todo = todos[i]

      let d = $('<div>')
      d.html(todo.text)
      d.addClass('todo')
      d.addClass(todo.status)
      $('#todolar').append(d)
    }

  }

  $("#btn-add").on('click', function (){
    let text=$('#todo-inpt').val()
    addNewTodo(text)
    $('#todo-inpt').val('') 

    showTodos()
  })
