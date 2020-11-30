//get element with class "comment-form"
let commentForm = document.querySelector('.comment-form');

//get element with class "comment-list"
let commentList = document.querySelector('.comment-list');

//get user data from input
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    
    //create new element, in this case it is list element (li)
    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    

    let newCommentHolder = document.createElement('div');
    newCommentHolder.classList.add('comment-content-holder')

    let newCommentParagraph = document.createElement('p');
    newCommentParagraph.classList.add('comment');
    newCommentParagraph.textContent = commentField.value;
    commentField.value = '';


    let likesAndDateholder = document.createElement('div');
    likesAndDateholder.classList.add('comment-stats')

    let heartButton = document.createElement('button')
    heartButton.classList.add('heart')

    let statistic = document.createElement('span');
    statistic.classList.add('likes-number');

    let timeHolder = document.createElement('time');
    timeHolder.classList.add('data')






    newCommentHolder.append(newCommentParagraph);
    newComment.append(newCommentHolder);
    commentList.append(newComment);
    /*
    newComment.textContent = commentField.value;
    commentField.value = '';


    commentList.append(newComment);
    */
  };