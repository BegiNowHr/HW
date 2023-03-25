const input = document.getElementById('input')
const createButton = document.getElementById('create_button')

const exit2 = document.querySelector('.exit')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const arr=[]
        const arr2 = input.value.split('').reverse().join('')
        arr.push(arr2)
        arr.forEach((item)=>{
            const new_Block=document.createElement('div')
            const newText = document.createElement('p')
            const del = document.createElement('Button')
            newText.innerHTML = item
            exit2.append(newText)
            new_Block.append(newText)
            new_Block.append(del)
            exit2.append(new_Block)
            del.innerHTML = 'Delete'
            del.onclick=()=>{
                new_Block.remove()
            }
            }
        )
    }
    input.value = ''
}
createButton.onclick = () => createTodo()
createTodo()
