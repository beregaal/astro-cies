const ComponentWinnicott = (function () {
  // Objeto público
  const outside = {};

  // Opciones internas
  const options = {};

  /**
   * Mezcla de objetos (reemplazo de $.extend)
   * Deep merge muy ligero para configuraciones simples.
   */
  const mergeDeep = (target, source) => {
    for (const key in source) {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        if (!target[key]) target[key] = {};
        mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  };

  /**
   * Asigna eventos de DOM y validaciones
   */
  const SetDomEvents = function () {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".copy")) {
        const btn = e.target.closest(".copy");
        const text = btn.dataset.copy;

        navigator.clipboard.writeText(text).then(() => {
          btn.innerHTML = '<i class="bi bi-clipboard-check"></i>';
          setTimeout(() => (btn.innerHTML = '<i class="bi bi-copy"></i>'), 1500);
        });
      }
    });
  };

  /**
   * Inicializador público
   * Similar a jQuery: ComponentPrograma.init(config)
   */
  outside.init = function (config = {}) {
    mergeDeep(options, config);
    SetDomEvents();
    SetupFormulario();
  };

  return outside;
})();
