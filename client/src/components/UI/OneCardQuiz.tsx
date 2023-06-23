import React from 'react';
import { Card } from 'antd';
import type { QuestionType } from '../Types/themeType';
import ModalWindowQuiz from './ModalWindowQuiz';

const { Meta } = Card;

type QuestionProps = {
  question: QuestionType;
};

export default function OneCardQuiz({ question }: QuestionProps) {
  return (
    <Card hoverable style={{ width: 240 }}>
      <Meta title={`Вопрос на ${question.point} очков`} />
      <ModalWindowQuiz question={question} />
    </Card>
  );
}
