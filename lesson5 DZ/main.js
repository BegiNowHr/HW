const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const delButton = document.createElement('delButton')
        const edit = document.createElement('edit')
        const buttons = document.createElement('buttons')
        buttons.setAttribute('class','buttons')
        delButton.setAttribute('class', 'delButton')
        edit.setAttribute('class', 'edit')
        div.setAttribute('class', 'block_text')

        text.innerHTML = input.value
        edit.innerHTML = 'Edit'
        delButton.innerHTML = 'Delete'
        div.append(text,buttons)
        todoList.append(div)
        buttons.append(delButton,edit)

        delButton.onclick = function(){
            div.remove()
        }
        edit.onclick = function (){
            var newEdit = prompt(`Вы хотите изменить ${text.innerText} на:`)
            if (newEdit !== null) {
                text.innerText = newEdit;
            }
            else if(newEdit===' '){
                return false
            }
        }
    }
    input.value = ''
}
createButton.onclick = () => createTodo()
