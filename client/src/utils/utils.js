export const handleOpenModal = (setter, getter) => {
  window.scrollTo(0, 0);
  const body = document.querySelector("body");
  body.classList.toggle("hide-scrollbar");
  setter(!getter);
};
