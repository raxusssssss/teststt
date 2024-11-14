const crosshair = document.querySelector('.crosshair');

document.body.style.cursor = 'none';

const clickableElements = document.querySelectorAll('a, button, input, select, textarea');
clickableElements.forEach(element => {
  element.style.cursor = 'none';
});

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    crosshair.style.left = `${mouseX}px`;
    crosshair.style.top = `${mouseY}px`;
});

function toggleSettings() {
    const settingsMenu = document.getElementById("settings-menu");
    settingsMenu.classList.toggle("active");
}

document.body.style.cursor = 'none';


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    if (savedTheme !== 'default') {
        document.body.classList.add(`${savedTheme}-theme`);
    }

    const themePicker = document.getElementById("theme-picker");
    if (themePicker) {
        themePicker.value = savedTheme;
        themePicker.addEventListener('change', () => {
            const selectedTheme = themePicker.value;
            document.body.classList.remove(
                'blue-theme',
                'green-theme',
                'red-theme',
                'purple-theme',
                'orange-theme',
                'pink-theme',
                'yellow-theme',
                'dark-theme',
                'rainbow-theme'
            );
            if (selectedTheme !== 'default') {
                document.body.classList.add(`${selectedTheme}-theme`);
            }
            localStorage.setItem('theme', selectedTheme);
        });
    }
});

