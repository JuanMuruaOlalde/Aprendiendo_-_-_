let estamosTesteando = false;

if (estamosTesteando) {
    module.exports = {
        presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    };
}
