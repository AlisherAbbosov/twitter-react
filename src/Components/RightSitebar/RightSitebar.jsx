import { Input, MightLike, Trends } from "./Components";
import Footer from "./Footer/Footer";
import "./RightSitebar.scss";

const RightSitebar = () => {
  return (
    <div className="right__sitebar col-3">
      <Input />
      <Trends />
      <MightLike />
      <Footer />
    </div>
  );
};

export default RightSitebar;
