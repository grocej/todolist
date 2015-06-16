var templates = {}


templates.realTodos = [
  "<br><input type='checkbox' checked='<%= done %>' />",
  "<label><%= items %></label>"
].join("")

templates.notRealTodos = [
  "<label>DONT USE ME</label>"
].join("")

var = todosCompleted;
function todosdone(el) {
}
