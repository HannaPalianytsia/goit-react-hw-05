import { NavLink } from "react-router-dom";

//можна зробити setInterval (setTimeout) і перенаправити на home page
const NotFoundPage = () => {
  return (
    <div>
      <p>This page not found</p>
      <NavLink to="/">Go to home page</NavLink>
    </div>
  );
};

export default NotFoundPage;
