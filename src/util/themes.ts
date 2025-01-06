function setTheme(themeName:string) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

export function loadTheme() {
    if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme')??"default-theme");
    }
}

export default {
    loadTheme,
    setTheme
}