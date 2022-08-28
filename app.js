var list= document.getElementById('todo')
function addlist(){
    var listitem=document.getElementById('list-item')
    var todo= document.createElement('li')
    todo.setAttribute('class','lis')
    var todotext=document.createTextNode(listitem.value)
    todo.appendChild(todotext)
    list.appendChild(todo)
    // console.log(todo)

    var delbtn=document.createElement('button')
    var deltxt = document.createTextNode('Delete')
    delbtn.appendChild(deltxt)
    delbtn.setAttribute('class','dil')
    delbtn.setAttribute('onclick','deleteItem(this)')
    todo.appendChild(delbtn)

    var editbtn=document.createElement('button')
    var edit = document.createTextNode('Edit')
    editbtn.appendChild(edit)
    editbtn.setAttribute('class','edt')
    editbtn.setAttribute('onclick','editItem(this)')
    todo.appendChild(editbtn)
    listitem.value=''
}

function deleteitem(){
    list.innerHTML=''
}
function deleteItem(e){
     e.parentNode.remove()
    // console.log(e.parentNode)
}
function editItem(e){
    var chng=prompt('Enter new value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=chng
    console.log(e.parentNode)

}
