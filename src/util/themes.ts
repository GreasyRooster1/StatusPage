function setTheme(themeName:string) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

export function loadTheme() {
    if (localStorage.getItem('theme')!=null) {
        setTheme(localStorage.getItem('theme')!);
    }else{
        setTheme("default-theme");
    }
}

export default {
    loadTheme,
    setTheme
}