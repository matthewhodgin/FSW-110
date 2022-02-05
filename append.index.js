var newListItem = document.createElement('li')
var myList = document.getElementById('my-list')
myList.appendChild(newListItem)


var newH = document.createElement('h')
newH.textContent = 'Welcome to my JS site'
newH.style.fontSize = '30px'
document.body.appendChild(newH)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with Javascript'
newP.style.fontSize = '20px'
document.body.appendChild(newP)
