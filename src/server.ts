import express from 'express';
import { createCourse } from './routes';

const app = express();


app.get('/', createCourse)



app.listen(3333, ()=> console.log("server runnig"));

// yarn add typescript -D para instalar o TS.
// yarn tsc --init  para inicializar o TS
/*
 o yarn tsc converte o file TS para JS para dentro da pasta dist se informar no file tsconfig.json o destino no outDir="./dist" 
 se não, cria dentro do src mesmo
*/