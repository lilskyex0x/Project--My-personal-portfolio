const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navbar');
const helloBtn = document.querySelector('#Hello');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  helloBtn.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  helloBtn.classList.remove('active');
}));

// PopUp Project DIV Js

const projectList = [
  {
    title: 'My First Project',
    img: 'img/Rectangle 21.svg',
    imgAlt: 'Project 1',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi<br><br>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Second Project',
    img: 'img/Rectangle 46.svg',
    imgAlt: 'Project 2',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi<br><br>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Third Project',
    img: 'img/Project3.png',
    imgAlt: 'Project 3',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi<br><br>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Fourth Project',
    img: 'img/Project4.png',
    imgAlt: 'Project 4',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi<br><br>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Fifth Project',
    img: 'img/Project5.png',
    imgAlt: 'Project 5',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi<br><br>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
  {
    title: 'My Sixth Project',
    img: 'img/Project6.png',
    imgAlt: 'Project 6',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    des: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi<br><br>Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi.'],
    git: ['#', 'See Github'],
    demo: ['#', 'See Demo'],
  },
];

const body = document.querySelector('#project__popup');
const hide = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.project__btn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const holder = e.currentTarget.dataset;
    let i = 0;
    if (holder.id === 'id-1') {
      i = 0;
    } else if (holder.id === 'id-2') {
      i = 1;
    } else if (holder.id === 'id-3') {
      i = 2;
    } else if (holder.id === 'id-4') {
      i = 3;
    } else if (holder.id === 'id-5') {
      i = 4;
    } else if (holder.id === 'id-6') {
      i = 5;
    }
    const section = document.createElement('section');

    const projectIndex = projectList[i];

    const Model = `
    <div class="popup__container">
      <h3 class="popup__title">${projectIndex.title}</h3>
      <ul class="tech__list">
        <li class="list">
            <a class="tech__btn" href="#">${projectIndex.tech[0]}</a>
        </li>
        <li class="list">
            <a class="tech__btn" href="#">${projectIndex.tech[1]}</a>
        </li>
        <li class="list">
            <a class="tech__btn" href="#">${projectIndex.tech[2]}</a>
        </li>
      </ul>
      <img class="popup__img" src="${projectIndex.img}" alt="${projectIndex.imgAlt}">
      <p class="popup__feature">${projectIndex.des}
      </p>
      <div class="btn6">
        <button type="submit" class="popup__btn">
          <a href="${projectIndex.demo[0]}"><span>See live</span><img src="img/ic_link.svg" alt=""></a>
        </button>
        <button type="submit" class="popup__btn2">
          <a href="${projectIndex.git[0]}"><span>See source</span><img src="img/Group.svg" alt=""></a>
        </button>
      </div>
      <ul class="previous__next">
        <li class="previous">
          <a href="#"><span>Previous Project</span><img src="img/ic_arrow_left.svg" alt=""></a>
        </li>
        <li class="next">
          <a href="#"><span>Next Project</span><img src="img/ic_arrow_rightb.svg" alt=""></a>
        </li>
      </ul>
      <div id="popupBtnCross" class="popupBtncross"><img src="img/ic_cross.svg" alt="cross"></div>
    </div>`;

    section.innerHTML = Model;
    body.appendChild(section);
    hide.forEach((i) => i.classList.toggle('hiddenSec'));

    const btnClose = document.getElementById('popupBtnCross');

    function closePopup() {
      body.removeChild(section);
      hide.forEach((i) => i.classList.toggle('hiddenSec'));
    }
    btnClose.addEventListener('click', closePopup);
  });
});

// Form Validation Section

const form = document.getElementById('form');
const inputEmail = document.getElementById('email');
const errorPop = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const mail = inputEmail.value.trim();
  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(mail)) {
    errorPop.innerHTML = '<div id="errorText">Email should be in lower case only !</div>';
  } else {
    form.submit();
  }
});

// Preserve Storage Section

const nameData = document.querySelector('#name');
const emailData = document.querySelector('#mail');
const textData = document.querySelector('#textarea');
form.addEventListener('submit', () => {
  const Data = {
    Name: nameData.value,
    Email: emailData.value,
    Text: textData.value,
  };
  localStorage.setItem('data', JSON.stringify(Data));
});

const AutoFiller = localStorage.getItem('data');
if (AutoFiller) {
  const DataStored = JSON.parse(localStorage.getItem('data'));
  nameData.value = DataStored.Name;
  emailData.value = DataStored.Email;
  textData.value = DataStored.Text;
}