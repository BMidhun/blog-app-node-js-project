import React, { FormEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface IProps {
  isEdit: Boolean;
  blogTitle: string;
  blogBody: string;
  handleTitle: (e: any) => void;
  handleBody: (e: any) => void;
  onSubmit: (e: FormEvent) => void;
}

function BlogCreateEditForm({
  isEdit,
  blogBody,
  blogTitle,
  handleTitle,
  handleBody,
  onSubmit,
}: IProps) {
  return (
    <div className="my-4 shadow-sm border p-3">
      <h2>{isEdit ? "Edit" : "Create"} Blog</h2>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="My Blog Title"
            required
            value={blogTitle}
            onChange={handleTitle}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            as="textarea"
            style={{ minHeight: "300px" }}
            placeholder="My Blog Content"
            required
            value={blogBody}
            onChange={handleBody}
          />
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit" className="w-100">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default BlogCreateEditForm;
