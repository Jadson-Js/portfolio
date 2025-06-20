export function getCurrentSection(section: string) {
  const target = document.getElementById(section);
  if (!target) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Atualiza o hash na URL sem recarregar a página
        window.history.pushState(null, "", `#${section}`);

        // Dispara manualmente o evento hashchange
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    },
    {
      root: null,
      threshold: 0.5,
    },
  );

  observer.observe(target);

  return () => {
    observer.disconnect();
  };
}
