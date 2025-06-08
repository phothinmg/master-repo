if (typeof window !== "undefined") {
  const storageKey = "theme-preference";
  const lightBtn = document.getElementById("light");
  const darkBtn = document.getElementById("dark");
  const systemBtn = document.getElementById("system");
  const localStorageTheme = localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  let currentTheme = localStorageTheme ? localStorageTheme : systemTheme;
  document.querySelector("html").setAttribute("data-theme", currentTheme);
  /**
   *
   * @param {HTMLElement} btn
   * @param {*} theme
   */
  const addevent = (btn, theme) => {
    const _theme = theme === "system" ? systemTheme : theme;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("html").setAttribute("data-theme", _theme);
      localStorage.setItem(storageKey, _theme);
      currentTheme = _theme;
    });
  };
  addevent(lightBtn, "light");
  addevent(darkBtn, "dark");
  addevent(systemBtn, "system");
}
