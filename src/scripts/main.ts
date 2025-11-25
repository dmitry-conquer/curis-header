import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", (): void => {
  const header = document.getElementById("header-solid");
  let ticking = false;

  const updateHeader = (): void => {
    if (window.scrollY > 100) {
      header?.classList.add("header-fill-scrolled");
    } else {
      header?.classList.remove("header-fill-scrolled");
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true }
  );
});
