// GameBoard component

import React from 'react';
import Square from '../Square';
import './GameBoard.css'

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { score: 0, gamestatus: "Click on an image to earn points, but don't click on any more than once!", clickedImages: [] , squares: ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.jpg", "images/image12.jpg"] };
        this.gameover = false;
    }

    // this method shuffles images
    shuffleImages = array => {
        let currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // this method handles clicks on the image
    handleSquareClick(img){
        this.setState({
          gamestatus:
            "Click on an image to earn points, but don't click on any more than once!"
        });
        
        // if this is the first click then set score to 1
        if (this.state.clickedImages.length===0) {
            let clickedImages =[];
            clickedImages.push(img);
            let squares = this.state.squares;
            squares = this.shuffleImages(squares);
            this.setState({score:1, clickedImages: clickedImages, squares: squares});
        }

        // if this is not the first click of the game then checking to see if the image was clicked previously
        else {
            for (let i=0 ; i<this.state.clickedImages.length ; i++) {
                 if (img === this.state.clickedImages[i]) {
                   this.setState({
                     score: 0,
                     gamestatus:"You already clicked on that image earlier. Sorry YOU LOST the game. Click on any image to play again.",
                     clickedImages: []
                   } , ()=>this.gameover=false);
                   this.gameover = true;
                   break;
                 }
            }

             // if the game is not over and also user clicked on different image
             if(!this.gameover) {
                 let clickedImages = this.state.clickedImages;
                 let squares = this.state.squares;
                 clickedImages.push(img);
                 squares = this.shuffleImages(squares);
                 
                 // checking to see if the user won the game
                 if (this.state.score===11) {
                    this.setState({
                      score: 0,
                      clickedImages: [],
                      gamestatus:
                        "Congratulations. You won this game. Click on any image to play again."
                    });
                 }
                 // if user did not win the game then increase the score
                 else {
                    this.setState({
                      score: this.state.score + 1,
                      clickedImages: clickedImages,
                      squares: squares,
                      gamestatus: "You guessed correctly. Good job. Keep guessing."
                    });
                 }
             }
        }
    }

    render() {
        return (
            <div className='gameboard'>
                <h4 className='status'>{this.state.gamestatus}</h4>
                <h4 className='score'>SCORE : {this.state.score}</h4>
                <br/>
                <div className='gamegrid'>
                {
                    this.state.squares.map( img => {
                        return (<div key={img}>
                          <Square imgsrc={img} onClick={()=>this.handleSquareClick(img)} />
                        </div>);
                    })
                }
                </div>
            </div>
        );
    }
}

export default GameBoard;