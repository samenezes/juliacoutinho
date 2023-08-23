import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const url = ': https://opentdb.com/api.php?amount=30&category=15';
  then(response => response.json());
  then(data => {      // estruturar requisição json 
    const type = document.querySelector('#conteudo');
    tipo.innerHTML = `${type.content}`;
    const category  = document.querySelector('#conteudo');
    categoria.innerHTML = `${category.content}`;
}
// nao esquecer de renderizar e iniciar a
return (
  <>
  <div id="cabecalho">
    <h1> Oi eu sou o cabeçalho </h1>  
    </div>
    <div id="conteudo">

    </div>
    <div id="rodape">

      <p> Julia Maria Correa </p>
    </div>
    
  </>
);

export default App;
