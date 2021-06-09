import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Trivia = (props) => {
  const fetchTrivia = (e) => {
    e.preventDefault();
    props.getTrivia();
  };
  console.log(props);

  const shuffleAnswers = () => {
    const answerList = [...currentQ.incorrect_answers, currentQ.correct_answer];
    var currentIndex = answerList.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [answerList[currentIndex], answerList[randomIndex]] = [
        answerList[randomIndex],
        answerList[currentIndex],
      ];
    }

    return answerList;
  };

  const currentQ = props.triviaQuestions[currentQIndex];

  const verifyAnswer = (ev) => {
    ev.preventDefault();
    if (ev.target.value === currentQ.correct_answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  const shuffledAnswers = shuffleAnswers();

  return (
    <Card>
      <Card.Body>
        <Card.Title>{currentQ.question}</Card.Title>
        <Button
          onClick={verifyAnswer}
          block
          value={shuffledAnswers[0]}
          size="lg"
          variant="primary"
        >
          {shuffledAnswers[0]}
        </Button>
        <Button
          onClick={verifyAnswer}
          block
          value={shuffledAnswers[1]}
          size="lg"
          variant="primary"
        >
          {shuffledAnswers[1]}
        </Button>
        <Button
          onClick={verifyAnswer}
          block
          value={shuffledAnswers[2]}
          size="lg"
          variant="primary"
        >
          {shuffledAnswers[2]}
        </Button>
        <Button
          onClick={verifyAnswer}
          block
          value={shuffledAnswers[3]}
          size="lg"
          variant="primary"
        >
          {shuffledAnswers[3]}
        </Button>
        <Card.Footer>
          <strong>{
          (() => {
              if(correct !== null) {return correct ? 'Correct!': 'Incorrect!'}
              else return null
            })()}</strong>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    triviaQuestions: state.triviaQuestions,
  };
};

export default connect(mapStateToProps, {})(Trivia);
