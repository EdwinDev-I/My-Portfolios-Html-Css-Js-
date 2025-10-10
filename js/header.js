import { content } from './content.js';


function rendersMenu() {

  let newContent = '';

  content.forEach(contents => {
    newContent += `
    <div class="display-Container js-display-Container">
    <div class="display-Contents">
    <a href="">
    ${contents.about}
    </a>
    </div>
    <div class="display-Contents">
    <a href="">
    ${contents.projects}
    </a>
    </div>
    <div class="display-Contents">
    <a href="">
    ${contents.contact}
    </a>
    </div>
    </div>
    `;
  });


  document.querySelector('.js-displays-Contents').innerHTML = newContent;

  return newContent;
};

document.getElementById('navbar').addEventListener('click', () => {
  rendersMenu();
  // Navbar toggle for mobile
  const navContent = document.querySelector('.js-displays-Contents');
  if (window.innerWidth <= 768) {
    if (navContent.style.display === 'flex' || navContent.style.display === '') {
      navContent.style.display = 'none';
    } else {
      navContent.style.display = 'flex';
    }
  }
});


// Animated text switcher for main-Container
document.addEventListener('DOMContentLoaded', () => {
  const messages = [
    'Welcome EDDY.DEV Online Digital Solutions',
    'We Offer A Wide Range of Services, Including Web-Development, Mobile-App Development, Digital Marketing, And More.',
    'We Build Solutions That Help You Achieve Your Business Goals.'
  ];
  const textEl = document.getElementById('animated-text');
  let idx = 0;

  function showMessage(i) {
    textEl.classList.remove('visible');
    setTimeout(() => {
      textEl.textContent = messages[i];
      textEl.classList.add('visible');
    }, 700);
  }

  showMessage(idx);
  setInterval(() => {
    idx = (idx + 1) % messages.length;
    showMessage(idx);
  }, 3000);
});




