import React, { useState } from 'react'
import { useRef } from 'react';
import './Chessboard.css'
import Tile from './Tile';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = [1,2,3,4,5,6,7,8];
const initialBoardState = [];

//Black pawns
for(let i=0;i<8;i++){
    initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",x:i,y:1})
}

//White pawns
for(let i=0;i<8;i++){
    initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",x:i,y:6})
}

// Black pieces
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",x:0,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",x:1,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",x:2,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",x:3,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",x:4,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",x:5,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",x:6,y:0})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",x:7,y:0})



// White pieces
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",x:0,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",x:1,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",x:2,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",x:3,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",x:4,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",x:5,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",x:6,y:7})
initialBoardState.push({image:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",x:7,y:7})






const Chessboard = () => {

    const [pieces, setPieces] = useState(initialBoardState)

    const chessBoardRef = useRef(null);
    
    let activePiece = null;

    const grabPiece = (e) => {
        const element = e.target;
        if(element.className === "chess-piece"){
            const x = element.getBoundingClientRect().left;
            const y = element.getBoundingClientRect().top;
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            activePiece = element
        
        }
    }

    const movePiece = (e) => {
        if(activePiece){
            const x = e.target.getBoundingClientRect().left  ;
            const y = e.target.getBoundingClientRect().top ;
            activePiece.style.position = "absolute";
            activePiece.style.left = `${x}px`;
            activePiece.style.top = `${y}px`;
        
        }
    }

    const dropPiece = (e) => {
        if(activePiece){
            activePiece = null
        
        }
    }

    let board = []

    for(let j=0;j<verticalAxis.length;j++){
        for(let i = 0; i < horizontalAxis.length;i++){   
            let image = undefined
            pieces.forEach((p)=>{
                if(p.x === i && p.y===j){
                    image = p.image
                }
            })

            board.push(<Tile key={`${i} ${j}`} number = {(i+j)} image={image}/>)
        }
    }
  return (
    <div id="chessboard" onMouseMove={(e) => movePiece(e)} onMouseDown={grabPiece} onMouseUp={dropPiece} ref={chessBoardRef}>{board}</div>
  )
}

export default Chessboard