import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      conteudos.map((item) => 
        <div className="contents">
          <span className="contents-item">Conteúdo:&nbsp;{item.conteudo}</span>
          <span className="contents-item">Bloco:&nbsp;{item.bloco}</span>
          <span className="contents-item">status:&nbsp;{item.status}</span>
        </div>
      )
    )
  }
}

export default Content;
