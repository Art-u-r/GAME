import { Avatar, Col, Collapse, List, RadioChangeEvent, Row, Skeleton } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../features/reduxHooks';
import OneCardQuiz from './OneCardQuiz';
import { Card } from 'antd';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export default function ThemesUI() {
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };
  const dispatch = useAppDispatch();
  const themes = useAppSelector((state) => state.themes);
  console.log(themes);

  return (
    <>
      <div>
        {themes.map((theme) => (
          <Row key={theme.id} gutter={[16, 16]}>
            <Col span={8}>
              <Card>
                <p>{theme.title}</p>
              </Card>
            </Col>
            <Col span={16}>
              {theme.Quizzes.map((quiz) => (
                <OneCardQuiz key={quiz.id} question={quiz} />
              ))}
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}

{
  /* <>
     <div>
        {themes.map((theme)=> (
            <Col>
            <p>{theme.title}</p>
                {theme.Quizzes.map((quiz)=>(
                    <Row>
                        <ol>{quiz.point}</ol>
                    </Row>
                ))}
            </Col>
        )
        )}
     </div>
    </> */
}
