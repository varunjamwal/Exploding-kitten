import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Button,
    Center,
     } from '@chakra-ui/react'
import DisplayCard from './DisplayCard'
import { startGame } from '../redux/actions/startGameAction';
import { flipCard } from '../redux/actions/ActionCreator';

class Home extends Component {
  componentWillMount() {
    this.props.startGame();
  }
   updateWin = () => {
    fetch('http://localhost:8080/addWin?' + new URLSearchParams({
            user: this.props.card.user,
        }), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      })
          .then(response => response.json())
          .then(data => console.log(data));
}
  flipCard = () => this.props.flipCard();
  render() {
    const { cardFlipped, cardArray, defuseCards, status } = this.props.card;
    console.log(this.props.card);
    console.log(status)
    if(status.includes('WON')){
      this.updateWin();
    }
    return (
          <>
          <div style={{
                position: 'absolute',
                right: 15,
                top: 15,
          }}><Link to="/score">Leaderboard</Link></div>
          <DisplayCard heading={cardFlipped} cardLeft={cardArray.length} defuseCards={defuseCards} status={status} />
          <Center>
          <Button colorScheme="blue" onClick={this.flipCard}>
            Flip
        </Button></Center></>
    );
  }
}

const mapStateToProps = ({ card }) => ({ card });
const mapDispatchToProps = { startGame, flipCard };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
