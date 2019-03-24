import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import './index.css';
//import App from './App';
import club from './images/club.jpg';
import spade from './images/spade.jpg';
import heart from './images/heart.jpg';
import diamond from './images/diamond.jpg';
import back from './images/back.png';
import aceclub from './images/aceclub.png';
import kingclub from './images/kingclub.png';
import queenclub from './images/queenclub.png';
import * as serviceWorker from './serviceWorker';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class BottomCard extends React.Component {
  render() {

    if (!this.props.cardChosen) {

      return <img src={back} alt="back" />
    }

    else {

      if (this.props.firstCard === "aceclub") {
        return <img src={aceclub} alt="aceOfClubs" />
      }

      if (this.props.firstCard === "kingclub") {
        return <img src={kingclub} alt="kingOfClubs" />
      }

      if (this.props.firstCard === "queenclub") {
        return <img src={queenclub} alt="queenOfClubs" />
      }

    }

  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstCardChosen: false,
      firstCard: '',
      firstHandProbability: 36
    };

    this.click = this.click.bind(this);
  }

  click(event, card) {
    event.preventDefault();
    console.log("You clicked on ", card);

    this.setState({firstCardChosen: true, firstCard: card});

    let card1 = 'Jh';
    let card2 = 'Js';

    const player1Cards = CardGroup.fromString(card1 + card2);
    const player2Cards = CardGroup.fromString('JdQd');
    //const board = CardGroup.fromString('7d9dTs');

    const result = OddsCalculator.calculate([player1Cards, player2Cards]);

    let probabilityAmount = result.equities[0].getEquity();

    this.setState({firstHandProbability: probabilityAmount});

    console.log("The first card is chosen: ", this.state.firstCardChosen)

  }


  render() {

    return (
      <div>
        <div className="test">
          testtt!!!
        </div>
        <div className="top-card" id="ace-of-clubs" onClick={(e) => {
          this.click(e, "aceclub")
        }}>
          A<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "kingclub")
        }}>
          K<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "queenclub")
        }}>
          Q<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "jackclub")
        }}>
          J<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "tenclub")
        }}>
          T<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "nineclub")
        }}>
          9<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "eightclub")
        }}>
          8<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "sevenclub")
        }}>
          7<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "sixclub")
        }}>
          6<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "fiveclub")
        }}>
          5<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "fourclub")
        }}>
          4<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "threeclub")
        }}>
          3<img src={club} alt="club" className="top-club" />
        </div>
        <div className="next-top-card" onClick={(e) => {
          this.click(e, "twoclub")
        }}>
          2<img src={club} alt="club" className="top-club" />
        </div>
        <br />
        <div className="first-top-card-spade" id="ace-of-spades" onClick={(e) => {
          this.click(e, "acespade")
        }}>
          A<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "kingspade")
        }}>
          K<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "queenspade")
        }}>
          Q<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "jackspade")
        }}>
          J<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "tenspade")
        }}>
          T<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "ninespade")
        }}>
          9<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "eightspade")
        }}>
          8<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "sevenspade")
        }}>
          7<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "sixspade")
        }}>
          6<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "fivespade")
        }}>
          5<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "fourspade")
        }}>
          4<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "threespade")
        }}>
          3<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="next-top-card-spade" onClick={(e) => {
          this.click(e, "twospade")
        }}>
          2<img src={spade} alt="spade" className="top-spade" />
        </div>
        <div className="first-top-card-heart" id="ace-of-hearts" onClick={(e) => {
          this.click(e, "aceheart")
        }}>
          A<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "kingheart")
        }}>
          K<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "queenheart")
        }}>
          Q<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "jackheart")
        }}>
          J<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "tenheart")
        }}>
          T<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "nineheart")
        }}>
          9<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "eightheart")
        }}>
          8<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "sevenheart")
        }}>
          7<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "sixheart")
        }}>
          6<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "fiveheart")
        }}>
          5<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "fourheart")
        }}>
          4<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "threeheart")
        }}>
          3<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="next-top-card-heart" onClick={(e) => {
          this.click(e, "twoheart")
        }}>
          2<img src={heart} alt="heart" className="top-heart" />
        </div>
        <div className="first-top-card-diamond" id="ace-of-diamonds" onClick={(e) => {
          this.click(e, "acediamond")
        }}>
          A<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "kingdiamond")
        }}>
          K<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "queendiamond")
        }}>
          Q<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "jackdiamond")
        }}>
          J<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "tendiamond")
        }}>
          T<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "ninediamond")
        }}>
          9<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "eightdiamond")
        }}>
          8<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "sevendiamond")
        }}>
          7<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "sixdiamond")
        }}>
          6<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "fivediamond")
        }}>
          5<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "fourdiamond")
        }}>
          4<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "threediamond")
        }}>
          3<img src={diamond} alt="diamond" className="top-diamond" />
        </div>
        <div className="next-top-card-diamond" onClick={(e) => {
          this.click(e, "twodiamond")
        }}>
          2<img src={diamond} alt="diamond" className="top-diamond" />
        </div>

        <div>
          {this.state.firstHandProbability}
        </div>


        <br />

        <BottomCard cardChosen={this.state.firstCardChosen} firstCard={this.state.firstCard} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();