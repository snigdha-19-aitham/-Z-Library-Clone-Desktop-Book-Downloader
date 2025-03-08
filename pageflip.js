const home = document.querySelector("#home");
const books = document.querySelector("#books");
const articles = document.querySelector("#articles");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");


let currentLocation = 1;
let maxLocation = 4;

const sleep = (time) => new Promise((resolve) => setTimeout(resolve,time));

// Event Listener
home.addEventListener("click",async ()=>{
    if(currentLocation == 3){
        goPrevPage();
        await sleep(500);
    } 
    if(currentLocation == 2) goPrevPage();
})

articles.addEventListener("click",async ()=>{
    if(currentLocation == 1){
        goNextPage();
        await sleep(500);
    } 
    if(currentLocation == 2) goNextPage();
})

books.addEventListener("click",()=>{
    if(currentLocation == 1) goNextPage();
    else goPrevPage();
})


function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}