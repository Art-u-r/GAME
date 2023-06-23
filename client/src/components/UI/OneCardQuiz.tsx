import React from 'react';
import { Card } from 'antd';
import { QuestionType } from '../Types/themeType';

const { Meta } = Card;

type QuestionProps = {
    question: QuestionType;
};

export default function OneCardQuiz({ question }: QuestionProps) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
    >
      <Meta title={question.question} description="www.instagram.com" />
    </Card>
  );
}
