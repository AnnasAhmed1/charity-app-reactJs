export function scrollToSection(id = "top") {
  const element = document.querySelector(`#${id}`);
  element?.scrollIntoView({ behavior: "smooth" });
  if (element && id !== "home") {
    const offset = -1;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
}
