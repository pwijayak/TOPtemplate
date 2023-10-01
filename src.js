// your JavaScript file
const container = document.querySelector('#container');
// content
// div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// 
const content2 = document.createElement('p')
content2.classList.add('contentP')
content2.textContent="Hey, I'm red!"
content2.style.color='red'

const content3= document.createElement('h2')
content3.classList.add('content3')
content3.textContent="Hey, I'm a blue h2"
content3.style.color="blue"

const pinkDiv =document.createElement('div')
pinkDiv.classList.add('pinkDiv')
pinkDiv.style.backgroundColor='pink'
pinkDiv.style.border='2px solid black'


// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”


const pinkDivH1=document.createElement('h1')
const pinkDivP=document.createElement('p')

pinkDivH1.classList.add('pinkDivH1')
pinkDivP.classList.add('pinkDivP')

pinkDivH1.textContent="I'm a div too"
pinkDivP.textContent= "This is quality paragraph content"

container.appendChild(content);
container.appendChild(content2)
container.appendChild(content3)



pinkDiv.appendChild(pinkDivH1)
pinkDiv.appendChild(pinkDivP)

container.appendChild(pinkDiv)

