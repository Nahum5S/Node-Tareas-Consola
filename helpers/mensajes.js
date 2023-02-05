const { rejects } = require("assert");
const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {

  return new Promise((resolve) => {

    console.clear();
    console.log("=========================".green);
    console.log("  Selecciona una opción".green);
    console.log("=========================\n".green);

    console.log(`${"1.".green} Crear Tarea`);
    console.log(`${"2.".green} Listar Tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar Tarea`);
    console.log(`${"0.".green} Salir`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {

    return new Promise( resolve => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        
          readline.question(`\nPresione ${"Enter".green} para continuar\n`, (opt) => {
            readline.close();
            resolve();//Se usa este por que en este apartado de la pausa no es importante lo que usuarios escriba, en el otro si
          });
    });
};

module.exports = {
  mostrarMenu,
  pausa,
};
