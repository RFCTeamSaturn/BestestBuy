/*
import Question from './Question.jsx';
import Search from './Search.jsx';
import AskYourQuestion from './AskYourQuestion.jsx';
import SubmitYourAnswer from './SubmitYourAnswer.jsx';
*/

import React from 'react';
import axios from 'axios';
import { apiKey } from './config';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

// quest: qa/questions
// ans: qa/questions/:question_id/

const getQuestions = function () {
  let body = {
    product_id: '5',
    page: 1,
    count: 5,
  };
  return axios.get(url + 'qa/questions?product_id=5', {
    headers: {
      Authorization: apiKey,
    },
  });
};

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    getQuestions().then((data) => {
      console.log(data);
    });
  }

  render() {
    return <div>Hello I am QuestionsList</div>;
  }
};

export default QuestionsList;
