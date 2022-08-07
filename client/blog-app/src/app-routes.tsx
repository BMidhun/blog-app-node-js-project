import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LayoutHOC from "./hoc/layout.hoc";
import BlogList from "./pages/bloglist";
import ViewBlog from "./pages/blogpage";
import CreateEditBlog from "./pages/create-update-blog";
import Login from "./pages/login";
import Register from "./pages/register";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHOC />}>
          <Route index element={<BlogList />}></Route>
          <Route
            path="/myblogs"
            element={<BlogList isMyBlogList={true} />}
          ></Route>
          <Route path="/blogs/:id" element={<ViewBlog />}></Route>
          <Route path="/create-blog" element={<CreateEditBlog />}></Route>
          <Route path="/edit-blog/:id" element={<CreateEditBlog />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Navigate to={"/login"} />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
