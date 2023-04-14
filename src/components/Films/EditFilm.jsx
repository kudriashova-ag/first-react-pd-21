import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

const EditFilm = ({ film }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submitHandler = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          initialValues={{ ...film }}
          labelCol={{ span: 6 }}
          onFinish={submitHandler}
        >
          <Form.Item label="Name:" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Year:" name="year">
            <Input />
          </Form.Item>

          <Form.Item label="Image:" name="image">
            <Input />
          </Form.Item>

          <Form.Item label="Director:" name="director">
            <Input />
          </Form.Item>

          <Form.Item label="Description:" name="description">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{offset: 6}}>
            <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>


        </Form>
      </Modal>
    </div>
  );
};

export default EditFilm;
