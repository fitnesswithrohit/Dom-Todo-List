
let themeColors = document.querySelectorAll('input[type="radio"]')

// console.log(themeColors);

// Store Themes

function storeTheme(theme){

    localStorage.setItem("theme", theme);

}



// Apply Themes

function applyTheme(){
    const activeTheme = localStorage.getItem("theme");
    themeColors.forEach((themeOption)=>{
        if(activeTheme === themeOption.id){

            themeOption.checked = true;

        }
    })
}


themeColors.forEach((themeOption)=>{

    themeOption.addEventListener("click", ()=>{

        // console.log(themeOption);
        storeTheme(themeOption.id);
    })
})

document.onload = applyTheme();





let form = document.getElementById("addForm")

form.addEventListener("submit", runEvent)

// let listItem = document.getElementsByClassName("list-group")[0];
// console.log(listItem);

let listItem = document.getElementById("items");


listItem.addEventListener("click", removeEvent);

let filterItem = document.getElementById("filter");

filterItem.addEventListener("keyup", filterEvent)

function runEvent(e){
    e.preventDefault();
    // console.log(e.target);

    let inputElement = document.querySelector('input[id="item"]');
    // console.log(inputElement.value);

    let newItem = document.createElement("li");
    newItem.className="list-group-item"
    newItem.append(inputElement.value);
    // console.log(newItem);

    let deleteBtn = document.createElement("button");
    deleteBtn.className ="btn btn-danger btn-sm float-right delete";
    deleteBtn.append("X");
    // console.log(deleteBtn);

    newItem.append(deleteBtn);

    listItem.append(newItem);


}

// Remove Items from list

function removeEvent(e){
    
    // console.log(e.target.parentElement);
    if(e.target.classList.contains("btn-danger")){

        // if(confirm("want to delete??")){

            // console.log(e.target.parentElement);

            listItem.removeChild(e.target.parentElement)


        // }


    }

}

// Filter Out Items (Elements)

function filterEvent(e){

    // console.log(e.target.value);

    let text = e.target.value.toLowerCase();

    let items = document.getElementsByTagName("li");

    // console.log(items);

    Array.from(items).forEach((item)=>{

        // console.log(item.textContent);
        // console.log(item.childNodes);
        let searchText = item.childNodes[0].textContent;

        if(searchText.toLowerCase().indexOf(text) != -1){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    })

}





































// let themeColors = document.querySelectorAll('input[type="radio"]');

// // console.log(themeColors);

// // Store Themes

// function storeTheme(theme){

//     localStorage.setItem("theme", theme)

// }

// // Apply theme

// function applyTheme(){

//     const activeTheme = localStorage.getItem("theme");

//     themeColors.forEach((themeOption)=>{

//         if(activeTheme === themeOption.id){

//             themeOption.checked = true


//         }
//     })

// }




// themeColors.forEach((themeOption)=>{

//     themeOption.addEventListener("click",
//     ()=>{

//         // console.log(themeOption);

//         storeTheme(themeOption.id)

//     })

// })


// document.onload = applyTheme();













// let form = document.getElementById("addForm")

// // let listItem = document.getElementsByClassName("list-group")[0]
// let listItem = document.getElementById("items")

// let filterItem = document.getElementById("filter")


// listItem.addEventListener("click", removeEvent)


// form.addEventListener("submit", runEvent)


// filterItem.addEventListener("keyup", filterEvent)


// function runEvent(e) {
//     e.preventDefault();

//     let inputElement = document.querySelector('input[id="item"]')

//     let newItem = document.createElement("li");

//     newItem.className = "list-group-item";
//     newItem.append(inputElement.value);

//     let deleteBtn = document.createElement("button");
//     deleteBtn.className = "btn btn-danger btn-sm float-right delete"

//     deleteBtn.append("X")

//     newItem.append(deleteBtn);
//     listItem[0].append(newItem);

// }

// // remove items from list

// function removeEvent(e) {

//     if (e.target.classList.contains("btn-danger")) {

//         // console.log(e.target);
//         if (confirm("want to delete this itam?")) {

//             listItem.removeChild(e.target.parentElement)

//         }


//     }

// }

// // Filter Out Items (Searching)

// function filterEvent(e){

//     // console.log(e.target.value);
//     let text = e.target.value.toLowerCase();

//     let items = document.getElementsByTagName("li")

//     // console.log(items);

//     Array.from(items).forEach((item)=>{

//         let searchText = item.childNodes[0].textContent;

//         if(searchText.toLowerCase().indexOf(text) != -1){

//             item.style.display = "block"

//         }
//         else{

//             item.style.display = "none"

//         }

//     })

// }

