import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { useAppDispatch, useAppSelector } from '../features/reduxHooks';
import { oneQuizThunk } from '../features/thunkActions/themeActionsThunk';

export default function ModalWindowQuiz({ question }): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  // const dispatch = useAppDispatch();
  // const oneQwiz = useAppSelector((stor) => stor.themes);
  // console.log(oneQwiz);

  // useEffect(() => {
  //   dispatch(oneQuizThunk(question.id));
  // }, []);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Открыть
      </Button>
      <Form>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>{question.question}</p>
          <p>{`очки ${question.point}`}</p>
          <Input placeholder={question.answers} />
        </Modal>
      </Form>
    </>
  );
}
