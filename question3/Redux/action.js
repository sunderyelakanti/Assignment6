import * as actionType from "./type"
let nextTodoId = 0
export const addTodo = text => ({
  type: actionType.ADD_TODO, 
  id: nextTodoId++,
  text
})


export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
