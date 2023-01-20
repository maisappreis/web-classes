"use strict";
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>
// Namespaces
// Espaços de nome reservados, para que garanta que aquele nome não vai conflitar com o escopo global.
// Nos arquivos TS, não tem o esquema de módulos do Node.
// Namespaces Aninhados
// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14;
//         export function circuferencia(raio: number) {
//             return PI * Math.pow(raio, 2)
//         }
//         export function retangulo(base: number, altura: number) {
//             return base * altura
//         }
//     }
// }
const PI = 2.99; // as sentenças abaixo não irão considerar esse PI, pq o PI dentro da 'namespace' está protegido.
console.log(Geometria.Area.circuferencia(10)); // isso está funcionando porque está pegando dos arquivos 'geometriaCirc.ts' e 'geometriaRect.ts'
console.log(Geometria.Area.retangulo(10, 6));
console.log(PI);
// isso está funcionando porque está pegando dos arquivos 'geometriaCirc.ts' e 'geometriaRect.ts'
// pode fazer essa integração colocando os arquivos no 'index.html'
// pode fazer a compilação pelo terminal
// dentro da pasta: namespaces> tsc -w --outFile namespaces.js geometriaCirc.ts geometriaRect.ts namespaces.ts
// ou ainda
// dentro da pasta: namespaces> tsc -w --outFile namespaces.js namespaces.ts
// MAS, deve-se colocar aquelas referencias nas linhas 1 e 2 
