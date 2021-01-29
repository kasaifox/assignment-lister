document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form#create-assignment-form');
    const assignmentList = document.querySelector('ul#assignments');
    form.insertAdjacentHTML('beforeend', `
    <label for="new-assignment-user">Assignment User:</label>
    <input type="text" id="new-assignment-user" name="new-assignment-user" placeholder="user">
    <select>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
    </select>`);

    assignmentList.insertAdjacentHTML('beforeend', `<div id="red"></div>
    <div id="yellow"></div>
    <div id="green"></div>
    `)
    const redDiv = assignmentList.querySelector('div#red')
    const yellowDiv = assignmentList.querySelector('div#yellow')
    const greenDiv = assignmentList.querySelector('div#green')

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(e);
        if(e.target[3].value === "red"){
        redDiv.insertAdjacentHTML('beforeend', `<li style="color:${e.target[3].value}">${e.target[0].value} by ${e.target[2].value}<button class="delete-button">X</button></li>`);
        }
        else if (e.target[3].value === "yellow"){
        yellowDiv.insertAdjacentHTML('beforeend', `<li style="color:${e.target[3].value}">${e.target[0].value} by ${e.target[2].value}<button class="delete-button">X</button></li>`);
        }
        else if (e.target[3].value === "green"){
        greenDiv.insertAdjacentHTML('beforeend', `<li style="color:${e.target[3].value}">${e.target[0].value} by ${e.target[2].value}<button class="delete-button">X</button></li>`);
        }

    })

    document.addEventListener('click', function(e){
        if(e.target.matches('button.delete-button')){
        e.target.parentNode.remove();
        }
    })



});