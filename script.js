let boxes = document.getElementsByClassName("grid-item");
let button = document.getElementsByClassName("btn")[0];  
let for_lesser = Math.floor(Math.random() * 7) + 1;
let lesser_score = for_lesser - 1;
let for_greater = Math.floor(Math.random() * 4) + 1;
let greater_score = for_greater - 1;

function correct() {
    let audio = new Audio("Musics/correct.mp3");
    audio.play();
}

function wrong() {
    let audio = new Audio("Musics/wrong.mp3");
    audio.play();
}

button.onclick = play;

function play() {
    let amount = prompt("Enter the Amount :");
    if (amount === null || amount === "" || isNaN(amount)) {
        alert("Please enter a valid Amount");
    } else {
        let count = 0;
        amount = parseInt(amount);

        if (amount > 0 && amount <= 100) {
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].addEventListener("click", function() {
                    count++;
                    if (count < for_lesser) {
                        correct();  
                        boxes[i].style.backgroundImage = "url('Images/diamond.jpg')";
                    } else if (count === for_lesser) {
                        wrong(); 
                        boxes[i].style.backgroundImage = "url('Images/cross.png')";
                        setTimeout(function() {
                            alert("Oops! Try Again");
                            alert("Your Score Is : " + lesser_score);
                        }, 200);
                    }
                });
            }
        } else if (amount > 100) {
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].addEventListener("click", function() {
                    count++;
                    if (count < for_greater) {
                        correct(); 
                        boxes[j].style.backgroundImage = "url('Images/diamond.jpg')";
                    } else if (count === for_greater) {
                        wrong(); 
                        boxes[j].style.backgroundImage = "url('Images/cross.png')";
                        setTimeout(function() {
                            alert("Oops! Try Again");
                            alert("Your Score Is : " + greater_score);
                        }, 200);
                    }
                });
            }
        }
    }
}
