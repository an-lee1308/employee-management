import "antd/dist/antd.css";
import { Button } from "antd";
// const { Header, Content, Footer, Sider } = Layout;
import "./Header.scss";
function Heading() {
  type Props = {
    some?: any,
    style?: string,
  };
  return (
    <>
      <header className="header-fixed">

        <div className="header-limiter">

          <h1><span>E</span>Employee Management</h1>
          <div>

            <Button type="primary" style={{ margin: "auto", borderRadius: "20px" }}>
              Employee
            </Button>
            <Button type="default" style={{ margin: "auto", borderRadius: "20px" }}>
              Team
            </Button>
          </div>

        </div>

      </header>
    </>
  );
}

export default Heading;
