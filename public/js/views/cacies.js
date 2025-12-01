const ComponentCacies = (function () {
    // Objeto público
    const outside = {};

    // Opciones internas
    const options = {
        selector: {
            form: "#programa-registro-form",
            submitBtn: "#programa-registro-submit",
            spinner: "#programa-registro-spinner",
            successAlert: "#programa-registro-success"
        },
        config: {}
    };

    /**
     * Mezcla de objetos (reemplazo de $.extend)
     * Deep merge muy ligero para configuraciones simples.
     */
    const mergeDeep = (target, source) => {
        for (const key in source) {
            if (
                source[key] &&
                typeof source[key] === "object" &&
                !Array.isArray(source[key])
            ) {
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
    const SetDomEvents = function () {}

    /**
     * Establece las configuraciones y validaciones del fromulario
     */
    const SetupFormulario = function () {
        const form = document.querySelector(options.selector.form);
        if (!form) return;

        const submitBtn = document.querySelector(options.selector.submitBtn);
        const spinner = document.querySelector(options.selector.spinner);
        const successAlert = document.querySelector(options.selector.successAlert);

        /* --- Validaciones --- */
        const campos = {
            Nombre: (v) => v.trim() !== "",
            Apellidos: (v) => v.trim() !== "",
            Correo: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            Celular: (v) => v.trim() !== "",
            ServicioInteres: (v) => v !== "",
        };

        const validarCampo = (input, regla) => {
            const valido = regla(input.value);
            input.classList.toggle("is-invalid", !valido);
            return valido;
        };

        // Validación en vivo
        Object.keys(campos).forEach((campo) => {
            const input = form.querySelector(`[name="${campo}"]`);
            if (!input) return;

            input.addEventListener("input", () => validarCampo(input, campos[campo]));
            input.addEventListener("change", () => validarCampo(input, campos[campo]));
        });

        const setLoading = (state) => {
            if (!submitBtn || !spinner) return;
            submitBtn.disabled = state;
            spinner.classList.toggle("d-none", !state);
        };

        const mostrarExito = () => successAlert?.classList.remove("d-none");
        const ocultarExito = () => successAlert?.classList.add("d-none");

        // Evento de envío
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            ocultarExito();

            let ok = true;

            Object.keys(campos).forEach((campo) => {
                const input = form.querySelector(`[name="${campo}"]`);
                if (!input) return;
                if (!validarCampo(input, campos[campo])) ok = false;
            });

            if (!ok) return;

            setLoading(true);

            try {
                // Simulación futura: reemplazar por fetch(...)
                await new Promise((r) => setTimeout(r, 1200));

                form.reset();
                form.querySelectorAll(".is-invalid")
                    .forEach((el) => el.classList.remove("is-invalid"));

                mostrarExito();
            } finally {
                setLoading(false);
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
