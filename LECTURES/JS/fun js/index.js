//geted element by  a html
const addtaskbtn = document.getElementById("add-task-btn")
const todoboard = document.getElementById("todo-board")

const appendcard = document.getElementById('append-card')


function attechdragevents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('flying')
    })
    target.addEventListener('dragend', () => {
        target.classList.remove('flying')
    })
    todoboard.appendChild(target)
}

//adding event litionar

addtaskbtn.addEventListener("click", () => {
    const input = prompt('what is the task')
    if (!input) return;

    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.setAttribute('draggable', true)
    taskCard.innerText = input
    attechdragevents(taskCard)

})




//get all board
const addbord = document.querySelectorAll(".board")
const allitems = document.querySelectorAll(".item")


allitems.forEach((item) => attechdragevents(item))
addbord.forEach(board => {
    board.addEventListener('dragover', () => {
        const flyingElement = document.querySelector('.flying')
        console.log(board, 'kuch to gaya', flyingElement);
        board.appendChild(flyingElement)
    })
});

