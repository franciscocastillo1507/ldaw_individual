//Francisco Javier Castillo Hdez
//Entendiendo react y JSX
/*class Square extends React.Component {
  //agregrar estado debe de ser privado y asignar el valor
 /* constructor(props){
    super(props);
    this.state={
      value:null,
    };

  }*/  /*
  render() {
    return (
      //aparece alert
      //<button className="square" onClick={function(){alert('Click
      <button className="square"
        //onClick={()=> this.setState({value:'X'})}>
        onClick={()=> this.props.onClick()}>

        {
          //el uso de set state en un component react automaticamente actualiza al              //hijo compenente
          //this.props.value
          //this.state.value
          this.props.value
          /*React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.*/
   /*     }
      </button>
    );
  }
}*/
function Square(props){
  return(
  <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
  );
}
class Board extends React.Component {

  constructor(props){
    super(props);
    this.state={
      squares:Array(9).fill(null),
      xIsNext:true,
    };
  }

  handlerClick(i){
    const squares=this.state.squares.slice();
    //squares[i]='X';
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i]=this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares:squares,
      xIsNext: !this.state.xIsNext,
    });

  }

  renderSquare(i) {
    //devuelve la propiedad value
    return <Square
             value={this.state.squares[i]}
             onClick={()=> this.handlerClick(i)}/>;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status='Winner: '+winner;
    } else{
      status= 'Next player: ' +(this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
