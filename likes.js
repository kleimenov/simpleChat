let heart = document.querySelector('.heart');
let hearts = document.querySelectorAll('.heart');
//let likesCounter = document.querySelector('.likes-number');


for (let heart of hearts) {
  heart.onclick = () => {
    let likesCounter = heart.querySelector('.likes-number');
    if (heart.classList.contains('added')) {
      likesCounter.textContent--;  
    } else {
      likesCounter.textContent++;
    }
    heart.classList.toggle('added');
  };
}


