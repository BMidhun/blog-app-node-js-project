import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCreateEditForm from "./components/blog-create-edit-form";

function CreateEditBlog() {
  const params = useParams();
  const isEdit = params.id ? true : false;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleBody = (e: any) => setBody(e.target.value);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <BlogCreateEditForm
      isEdit={isEdit}
      blogTitle={title}
      blogBody={body}
      handleTitle={handleTitle}
      handleBody={handleBody}
      onSubmit={onSubmit}
    />
  );
}

export default CreateEditBlog;
