let input = prompt("What would you like to do?");
let list = [];
while (input !== 'quit') {
    if (input === 'new') {
        let newitem = prompt("Enter new ToDo:");
        list.push(newitem);
        console.log(`"${newitem}" added to list`);

    } else if (input === 'list') {
        console.log("**************");
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log("**************");


    } else if (input === 'delete') {
        let index = parseInt(prompt("Enter index of todo to delete: "));
        if(!Number.isNaN(index)){ // to check if a number is notanumber; ie: execute this only when numberis not NaN
        list.splice(index, 1);
        console.log("ToDo Removed");
        }else{
            console.log("Invalid index");
        }

    }
    input = prompt("What would you like to do?");
}
if (input === 'quit') {
    console.log("You Quit The To-Do List App!");
}