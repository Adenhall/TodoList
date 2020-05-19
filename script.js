let inputList = [];
let getInput = () => {
  let inPut = document.getElementById('inPut').value;
  inputList.push({ text: inPut, isDone: 'not done' });
  document.getElementById("inPut").value = null;
  updateTodoList();
  console.log(inputList)
}
// Update the list
let updateTodoList = () => {
  let html = "";
  if (inputList.length == 0) {
    document.getElementById('listArea').innerHTML = null;
  } else {
    for (let i = 0; i < inputList.length; i++) {
      html += `<li>${inputList[i].text}. Task ${inputList[i].isDone} <a href='#' onclick='toggleDone(${i})'>✓</a> <a href='#' onclick='remove(${i})'>x</a></li>\n`;
      document.getElementById('listArea').innerHTML = `${html}`

    }
  }
}
//Remove the task
let remove = (num) => {
  inputList.splice(num, 1)
  updateTodoList();
}
//Toggle task done
//P.S: I wanted to show the task progress this way instead of "Mark done" and "Mark undone" since my way looks nicer :P
//P.SS: Click the tick mark again to toggle back lol sorryyy

let toggleDone = (num) => {
  if (inputList[num].isDone == 'not done') {
    inputList[num].isDone = 'done!'
    document.getElementById("listArea").style.textDecoration = "line-through";
  } else if (inputList[num].isDone == 'done!') {
    inputList[num].isDone = 'not done'
    document.getElementById("listArea").style.textDecoration = "none";
  }
  updateTodoList();
}

//Make check sort

function checkBox()
{
  let checkTheBox = document.getElementById('defaultCheck1')
  console.log(checkTheBox.checked)
  if (checkTheBox.checked)
  {
    let sortList = inputList.filter(item => inputList.isDone == 'not done')
  }
}