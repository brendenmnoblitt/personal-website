document.addEventListener("DOMContentLoaded", () => {
    const textToCode = document.getElementById("textToCode");
    
    textToCode.addEventListener("mouseenter", () => {
        textToCode.innerHTML = "<code>hello, my name is @0xN0b</code>";
    });

    textToCode.addEventListener("mouseleave", () => {
        textToCode.innerHTML = "Hello, my name is Brenden";
    });
});

function toggleDarkMode() {
    const toggleSwitch = document.querySelector('#flexSwitchCheckDefault');
    const themeIcon = document.querySelector('#theme-icon');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme) {
      document.body.classList.toggle('dark-mode', currentTheme === 'dark');
      toggleSwitch.checked = currentTheme === 'dark';
      updateThemeIcon(themeIcon, currentTheme === 'dark');
    }
  
    toggleSwitch.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon(themeIcon, true);
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        updateThemeIcon(themeIcon, false);
      }
    });
  }
  
  function updateThemeIcon(themeIcon, isDarkMode) {
    themeIcon.classList.remove(isDarkMode ? 'fa-sun' : 'fa-moon');
    themeIcon.classList.add(isDarkMode ? 'fa-moon' : 'fa-sun');
  }
  
  toggleDarkMode();