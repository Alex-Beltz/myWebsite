const reviewSection = document.querySelector('.reviews');
const reviewCarousel = document.querySelector('.review-carousel');


// review cards data
const reviewCardData = [
  { 
    image: './images/cool_gorilla.jpg',
    text: '#1 If you can see this, my dynamic JavaScript works. Incidunt sit saepe qui, unde voluptatibus. Sint dolores totam assumenda ipsum.',
    name: 'Alex Beltz',
    company: 'I am Me'
  },
  { 
    image: './images/hotMom.png',
    text: '#2 Repellati rerum eos obcaecati dolorum officia, incidunt sit saepe qui, unde voluptatibus. Sint dolores totam assumenda ipsum.',
    name: 'Your Mom',
    company: 'Your Mom\'s House'
  },
  { 
    image: './images/hiddenFour.png',
    text: '#3 Repellati rerum eos obcaecati dolorum officia, incidunt sit saepe qui, unde voluptatibus. Sint dolores totam assumenda ipsum.',
    name: 'Someone Else',
    company: 'Where They At'
  },
  { 
    image: './images/anonymous-1.png',
    text: '#4 If you can see this, My JavaScript works. Omnis veritatis ab in, excepturi modi inventore mollitia, itaque autem sequi ex illo!',
    name: 'Someone Hidden',
    company: 'Hidden City'
  },
  { 
    image: './images/cool_gorilla.jpg',
    text: '#5 If you can see this, my dynamic JavaScript works. Incidunt sit saepe qui, unde voluptatibus. Sint dolores totam assumenda ipsum.',
    name: 'Alex Beltz',
    company: 'I am Me'
  },
  { 
    image: './images/hotMom.png',
    text: '#6 Repellati rerum eos obcaecati dolorum officia, incidunt sit saepe qui, unde voluptatibus. Sint dolores totam assumenda ipsum.',
    name: 'Your Mom',
    company: 'Your Mom\'s House'
  },
  { 
    image: './images/hiddenFour.png',
    text: '#7 Repellati rerum eos obcaecati dolorum officia, incidunt sit saepe qui, unde voluptatibus. Sint dolores totam assumenda ipsum.',
    name: 'Someone Else',
    company: 'Where They At'
  },
  { 
    image: './images/anonymous-1.png',
    text: '#8 If you can see this, My JavaScript works. Omnis veritatis ab in, excepturi modi inventore mollitia, itaque autem sequi ex illo!',
    name: 'Someone Hidden',
    company: 'Hidden City'
  },
];



// builds review cards
reviewCardData.forEach(function (item) {
  const reviewArr = Object.values(item);
  console.log(reviewArr);
  function createReviewCard() {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    const reviewText = document.createElement('div');
    reviewText.classList.add('review-text');
    reviewText.textContent = reviewArr[1];

    reviewItem.appendChild(reviewText);

    const reviewAuthor = document.createElement('div');
    reviewAuthor.classList.add('review-author');

    const reviewAvatar = document.createElement('div');
    reviewAvatar.classList.add('avatar');

    const reviewImage = document.createElement('img');
    reviewImage.setAttribute('src', reviewArr[0]);
    reviewImage.setAttribute('alt', 'reviewer\'s image');

    reviewAvatar.appendChild(reviewImage);
    reviewAuthor.appendChild(reviewAvatar);

    const reviewDetails = document.createElement('div');
    reviewDetails.classList.add('details');

    const reviewName = document.createElement('div');
    reviewName.classList.add('review-name');
    reviewName.textContent = reviewArr[2];

    reviewDetails.appendChild(reviewName);

    const reviewCompany = document.createElement('div');
    reviewCompany.classList.add('review-company');
    reviewCompany.textContent = reviewArr[3];

    reviewDetails.appendChild(reviewCompany);

    reviewAuthor.appendChild(reviewDetails);
    reviewItem.appendChild(reviewAuthor);
    reviewCarousel.appendChild(reviewItem);
  };
  createReviewCard(reviewArr);
});



// carousel functionality
const slides = document.querySelectorAll('.review-item');

const buttons = document.querySelectorAll('.carousel-control-cont button');
// console.log(buttons);

let current = Math.floor(Math.random() * slides.length);
let previous = current > 0 ? current -1 : slides.length - 1;
let next = current < slides.length -1 ? current + 1 : 0;

const update = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active', 'previous', 'next')
  })
  slides[current].classList.add('active');
  slides[current].style.width = '90%';
  slides[previous].classList.add('previous');
  slides[next].classList.add('next');
};

const goToNum = (number) => {
  current = number;
  previous = current > 0 ? current -1 : slides.length - 1;
  next = current < slides.length -1 ? current + 1 : 0;
  update();
}

const goToPrevious = () => current > 0 ? goToNum(current -1) : goToNum(slides.length - 1);

const goToNext = () => current < slides.length -1 ? goToNum(current + 1) : goToNum(0);

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => i === 0 ? goToPrevious() : goToNext()); 
}

update();