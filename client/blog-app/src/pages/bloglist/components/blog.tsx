import React, { Fragment } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { BiShow } from "react-icons/bi";
interface IProps {
  isMyBlog?: Boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView: (id: string) => void;
}

function BlogComponent({ isMyBlog, onEdit, onDelete, onView }: IProps) {
  return (
    <Card className="my-3 pointer-cursor">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>Card Title</Card.Title>

          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => onView("12")}>
              <BiShow size={20} className="text-white" />
            </Button>
            {isMyBlog && (
              <Fragment>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    if (onEdit) onEdit("12");
                  }}
                >
                  <FiEdit size={20} />
                </Button>
                <Button variant="secondary">
                  <MdDeleteOutline
                    size={20}
                    onClick={(e) => {
                      if (onDelete) onDelete("12");
                    }}
                  />
                </Button>
              </Fragment>
            )}
          </ButtonGroup>
        </div>
        <Card.Subtitle className="my-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className="mt-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogComponent;
