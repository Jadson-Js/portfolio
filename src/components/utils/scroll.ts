export function scroll(section: string) {
  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
