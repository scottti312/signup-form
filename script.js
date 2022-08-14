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

function checkPass() {
  console.log('test)');
  const pass = document.querySelector('#password');
  const confirm_pass = document.querySelector('#confirm-pass');
  if (pass.value == confirm_pass.value) {
    pass.setAttribute('style', 'border: 2px solid green');
    confirm_pass.setAttribute('style', 'border: 2px solid green');
  } else {
    pass.setAttribute('style', 'border: 2px solid red');
    confirm_pass.setAttribute('style', 'border: 2px solid red');
  }
  if (confirm_pass.value == '') {
    confirm_pass.setAttribute('style', 'border: 2px solid #5D7388')
    pass.setAttribute('style', 'border: 2px solid #5D7388')
  }
}

function submitPass() {
  console.log('test');
  const pass = document.querySelector('#password');
  const confirm_pass = document.querySelector('#confirm-pass');
  if (pass.value != confirm_pass.value) {
    alert("Passwords don't match");
  }
}
