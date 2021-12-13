import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <NavLink to="/product-detail/A-Book">A Book</NavLink>
        </li>
        <li>
          <NavLink to="/product-detail/A-Carpet">A Carpet</NavLink>
        </li>
        <li>
          <NavLink to="/product-detail/A-Course">An Online Course</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Products;
