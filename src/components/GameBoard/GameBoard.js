// GameBoard component

import React from 'react';
import Square from '../Square';
import './GameBoard.css'

class GameBoard extends React.Component {
    render() {
        return (
            <div className='gameboard'>
                <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                <h4 className='score'>SCORE : {0}</h4>
                <br/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image1.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image2.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image3.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image4.jpg' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image5.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image6.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image7.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image8.jpg' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image9.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image10.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image11.jpg' />
                        </div>
                        <div className='col-xs-3 col-sm-3'> 
                            <Square imgsrc='images/image12.jpg' />
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default GameBoard;