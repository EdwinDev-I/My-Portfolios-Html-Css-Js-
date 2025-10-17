function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

function toggleExplanation(){
 const toggle =   document.querySelector('.js-click');
  
 if (toggle.innerHTML === '▼') {
  toggle.innerHTML = '▲';
 } else {
  toggle.innerHTML = '▼';
 }

 let text1 = document.querySelector('.js-text1');

 if (text1.innerHTML === '') {
  text1.innerHTML = 'Project timelines vary, but most websites are delivered within 2-4 weeks, and custom apps within 4-8 weeks.';
 } else {
  text1.innerHTML = '';
 }
}

function toggleExplanations(){
 const toggles =   document.querySelector('.js-clicks');
  
 if (toggles.innerHTML === '▼') {
  toggles.innerHTML = '▲';
 } else {
  toggles.innerHTML = '▼';
 }

  let text2 = document.querySelector('.js-text2');

 if (text2.innerHTML === '') {
  text2.innerHTML = 'Yes! All packages include support, and we offer ongoing maintenance and updates as needed.';
 } else {
  text2.innerHTML = '';
 }
}