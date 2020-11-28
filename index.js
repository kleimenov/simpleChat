let heart = document.querySelector('.heart');
let hearts = document.querySelectorAll('.heart');

for (let heart of hearts) {
  heart.onclick = () => {
    heart.classList.toggle('added');
  };
}

/*
heart.onclick = () => {
  heart.classList.toggle('added');
};
*/
