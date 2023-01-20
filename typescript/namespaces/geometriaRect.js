"use strict";
// Namespaces em Multiplos Arquivos
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
