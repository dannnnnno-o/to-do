/* Auto Resize Textarea *//* Reward System */
function Reward(d, m){
    return ((d / 60) * 10) * m
}

addButton = document.querySelector(".addTask")

/* Submitting a task */
const container = document.querySelector(".container")


primaryDiv= document.querySelectorAll(".primary")
primaryDiv.forEach(e => {
    e.style.height = "max-content"
    e.style.alignSelf = "center"
})

newRow = document.createElement("div")
newRow.setAttribute("class", "add row")

newTask = document.createElement("div")
newTask.setAttribute("id", "addedTask")

newTaskInput = document.createElement("textarea")
newTaskInput.setAttribute("name", "task")
newTaskInput.setAttribute("id", "taskArea")
newTaskInput.setAttribute("autocomplete", "off")
newTaskInput.setAttribute("placeholder", "Scream for 2 hours at school :D")

newDifficulty = document.createElement("div")
newDifficulty.setAttribute("id", "addedDifficulty")

newDifficultyInput = document.createElement("input")
newDifficultyInput.setAttribute("id", "range")
newDifficultyInput.setAttribute("type", "range")
newDifficultyInput.setAttribute("min", "1")
newDifficultyInput.setAttribute("max", "100")
newDifficultyInput.setAttribute("value", "50")

newDifficultySpan = document.createElement("span")
newDifficultySpan.setAttribute("id", "value")

newDuration = document.createElement("div")
newDuration.setAttribute("id", "addedDuration")
newDurationInput = document.createElement("input")
newDurationInput.setAttribute("id", "duration")
newDurationInput.setAttribute("type", "text")
newDurationInput.setAttribute("title", "Duration in minutes")
newDurationInput.setAttribute("placeholder", "Duration in minutes")
newDurationInput.setAttribute("autofill", "off")

newReward = document.createElement("div")
newReward.setAttribute("id", "addedReward")
newRewardInput = document.createElement("button")
newRewardInput.setAttribute("type", "submit")
newRewardInput.setAttribute("id", "confirm")
newRewardInput.setAttribute("name", "confirm")
newRewardInput.setAttribute("onclick", "Confirm()")



/* Add Task */
function addTask(){
    container.append(newRow)
    newRow.append(newTask)
    newTask.append(newTaskInput)

    newRow.append(newDifficulty)
    newDifficulty.append(newDifficultyInput)
    newDifficulty.append(newDifficultySpan)
    newDifficultySpan.innerText = "Challenging!"


    /* Difficulty Slider */
    const slider = document.querySelector("#range")
    var value = document.querySelector("#value")

    function calcValue() {
        var valuePercent = (slider.value / slider.max) * 100;
        slider.style.background = 'linear-gradient(to right, #FF008C ' + valuePercent + '% , #fff ' + valuePercent + '%';
    }

    slider.addEventListener('input', function(){
        calcValue()
        value.textContent = this.value;
        if (value.textContent <= 25){
            value.textContent = "Easy :D"
        }
        else if(value.textContent <= 50){
            value.textContent = "Moderate :3"
        }
        
        else if(value.textContent <= 75){
            value.textContent = "Challenging!"
        }
        
        else if(value.textContent <= 95){
            value.textContent = "Difficult..."
        }
        else if(value.textContent <= 100){
            value.textContent = "Impossible D:"
        }
    })

    newRow.append(newDuration)
    newDuration.append(newDurationInput)

    newRow.append(newReward)
    newReward.append(newRewardInput)
    newRewardInput.innerText = "Confirm"

    const textarea = document.querySelectorAll("textarea");

    textarea.forEach(textarea => {
    textarea.addEventListener("keyup", e =>{
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
    textarea.setAttribute('spellcheck', false);
    textarea.setAttribute('autocorrect', "off");
    textarea.setAttribute('autocapitalize', "off");
    textarea.setAttribute('autocomplete', "off");
    })});

    slider.style.background = 'linear-gradient(to right, #FF008C 50% , #fff 50%)';

    addButton.setAttribute("class", "hide")

}

function Confirm(){
    
const addrow = document.querySelector(".add")
const confirm = document.querySelector("#confirm")
/* for values */
const addedTask = document.querySelector("#taskArea")
const addedDifficulty = document.querySelector("#range")
const addedDuration = document.querySelector("#duration")


const appendRow = document.createElement("div")
appendRow.setAttribute("class", "row")
const appendTask = document.createElement("div")
appendTask.setAttribute("class", "append appendTask")
appendTaskSpan = document.createElement("span")


const appendDifficulty = document.createElement("div")
appendDifficulty.setAttribute("class", "append appendDifficulty")

const appendDuration = document.createElement("div")
appendDuration.setAttribute("class", "append appendDuration")

const appendReward = document.createElement("div")
appendReward.setAttribute("class", "append appendReward")


    addrow.remove()
    container.append(appendRow)
    appendRow.append(appendTask)
    appendTask.append(appendTaskSpan)
    appendTaskSpan.innerText = addedTask.value

    appendRow.append(appendDifficulty)
    if (addedDifficulty.value <= 25){
    appendDifficulty.innerText = "Easy :D"
    } 
    else if (addedDifficulty.value <= 50){
    appendDifficulty.innerText = "Moderate :3"
    } 
    else if (addedDifficulty.value <= 75){
    appendDifficulty.innerText = "Challenging!"
    } 
    else if (addedDifficulty.value <= 95){
    appendDifficulty.innerText = "Difficult..."
    } 
    else if (addedDifficulty.value <= 100){
    appendDifficulty.innerText = "Impossible D:"
    } 

    appendRow.append(appendDuration)
    appendDuration.innerText = addedDuration.value + " minutes"

    appendRow.append(appendReward)
    appendReward.innerText = Reward(addedDuration.value, 1.5) + " minutes"

    append = document.querySelectorAll(".append")
    append.forEach(element => {
    element.style.height = "max-content"
    element.style.alignSelf = "center"

    addedTask.value = null
    addedDuration.value = null
    addedDifficulty.value = null
    const slider = document.querySelector("#range")

    addButton.setAttribute("class", "addTask")
});
}
