import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ color: "green" }}>Home Page!</h1>
      <button
        onClick={() => {
          navigate("/order-summary");
        }}
      >
        Place Order
      </button>
    </>
  );
};
export default Home;
