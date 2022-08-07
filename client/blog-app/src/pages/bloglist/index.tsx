import React from "react";
import { useNavigate } from "react-router-dom";
import BlogComponent from "./components/blog";

interface IProps {
  isMyBlogList?: boolean;
}

function BlogList({ isMyBlogList }: IProps) {
  const navigate = useNavigate();

  const goToBlog = () => {};

  const onEdit = (id: string) => {
    navigate("/edit-blog/" + id);
  };

  const onDelete = (id: string) => {
    alert("Delete blog");
  };

  const onView = (id: string) => {
    navigate("/blogs/" + id);
  };

  return (
    <div className="my-4">
      <BlogComponent
        isMyBlog={true}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
    </div>
  );
}

export default BlogList;
