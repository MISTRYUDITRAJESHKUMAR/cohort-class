const addbtn = document.getElementById('add-btn')
const todoinput = document.getElementById('todoinput')
const todoitemscontainer = document.getElementById('todo-items-cont')
const delallbtn = document.getElementById('delall-btn')



addbtn.addEventListener('click', function () {
    // geted a in value varaible a todoinput value
    const value = todoinput.value


    //create list tag
    const li = document.createElement('li')//<li></li>
    //the value of li is a todo input value 
    li.innerText = value  // <li>{value}</li>


    // adding a list on ul tag from ul its in html
    todoitemscontainer.appendChild(li)
    // remove a value of input li on in after add 
    todoinput.value = ''


    //  creating a delete btn its store in delbtn  
    const delbtn = document.createElement('button')
    // giving a delbtn value is X
    delbtn.innerText = "X"
    // now apend a list btn on list tag
    li.appendChild(delbtn)



    // added a litioner to remove a on click a delbtn to deete li
    delbtn.addEventListener('click', function () {
        li.remove()
    })


    //all function to remove all list on click btn
    delallbtn.addEventListener('click', function () {
        // first select all items from a quertioner
        const allItems = todoitemscontainer.querySelectorAll('li');
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].remove();
        }
    })

})

