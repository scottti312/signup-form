function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}

function themeIcon() {
  const root = document.documentElement;
  const container = document.querySelector('.icon-container');
  const icon = document.querySelector('.theme-toggle');

  setTheme();
  if (root.className == 'dark') {
    container.removeChild(icon);
    const theme = document.createElement("i");
    theme.classList.add('fa-regular');
    theme.classList.add('fa-sun');
    theme.classList.add('fa-3x');
    theme.classList.add('theme-toggle');
    theme.setAttribute('style', `
      width: 50px;
      height: 50px;
      color: #F9FAFB;
      transition: all 0.3s ease-in-out;`);
    container.appendChild(theme);
  }
  if (root.className == 'light') {
    container.removeChild(icon);
    const theme = document.createElement("i");
    theme.classList.add('fa-regular');
    theme.classList.add('fa-moon');
    theme.classList.add('fa-3x');
    theme.classList.add('theme-toggle');
    theme.setAttribute('style', `
      width: 50px;
      height: 50px;
      color: rgb(43,42,51);
      transition: all 0.3s ease-in-out;`);
    container.appendChild(theme);

  }
}

// document.querySelector('.icon-container').addEventListener('mouseover', () => {
//   console.log('happening');
//   const icon = document.querySelector('.theme-toggle');
//   icon.setAttribute('style', 'transform: scale(1.3, 1.3);')
// });

// document.querySelector('.icon-container').addEventListener('mouseout', () => {
//   const icon = document.querySelector('.theme-toggle');
//   icon.setAttribute('style', 'transform: scale(1.0, 1.0);')
//   console.log('happening again');
// });
