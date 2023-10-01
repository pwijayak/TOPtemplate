let btn= document.querySelector('button')
let input=document.querySelector('input')
let ul= document.querySelector('ul')






function press(){
   let variable=input.value
   input.value= ""

   let list= document.createElement('li')
let spanItem=document.createElement('span')
let newBtn= document.createElement('button')

list.appendChild(spanItem)
list.appendChild(newBtn)

spanItem.textContent=variable
newBtn.textContent='Delete'

ul.appendChild(list)
function del(){
    ul.removeChild(list)
    input.focus()
}

newBtn.addEventListener ('click', del)

input.focus()


}

btn.addEventListener('click', press)

