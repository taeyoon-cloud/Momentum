const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector(#todo-form input);
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify() -> 값을 string으로 변환
    // JSON.parse() -> string을 JSON 객체로 변환, 여기서는 배열로 변환
}


function delteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    //toDoList.removeChild(li);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id; // li에 id가 주어짐 -> html 확인해보면 알 수 있음
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", delteToDo);

    li.appendChild(span);
    li.appendChild(button); 

    li.classList.add("todo-style");

    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault(); //submit 기본동작 -> 페이지 새로고침
    
    const newToDo = toDoInput.value;
    toDoInput.value = ""; // toDoInput 입력 후 빈 칸으로 돌아가게 함

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){ // savedToDos !== null
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos; // 이걸 안해줘가지고 자꾸 toDos 배열 초기화됨 ㅡㅡ
    parsedToDos.forEach(paintToDo);
    // forEach -> array에 있는 각각의 element에 대해 function 실행하게 해줌
}