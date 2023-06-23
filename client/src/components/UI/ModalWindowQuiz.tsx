import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Form } from 'antd';
import { useAppDispatch, useAppSelector } from '../features/reduxHooks';
import { oneQuizThunk } from '../features/thunkActions/themeActionsThunk';

export default function ModalWindowQuiz(): JSX.Element {
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

  const dispatch = useAppDispatch();
  const oneQwiz = useAppSelector((stor) => stor.themes);
  console.log(oneQwiz);

  useEffect(() => {
    dispatch(oneQuizThunk(3));
  }, []);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Form>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>{oneQwiz.question}</p>
          <p>{`очки ${oneQwiz.point}`}</p>
          <Input placeholder={oneQwiz.answers} />
        </Modal>
      </Form>
    </>
  );
}
