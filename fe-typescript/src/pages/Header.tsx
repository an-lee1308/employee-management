import "antd/dist/antd.css";
// import { Layout, Row, Col } from "antd";
import { Button, Radio } from "antd";
// const { Header, Content, Footer, Sider } = Layout;
import "./Header.scss";
function Heading() {
  type Props = {
    some?: string;
  };
  return (
    <>
      <header className="header-fixed">

        <div className="header-limiter">

          <h1><a href="#">Employee Management</a></h1>

          <nav>
            <Button type="primary">
              Employee
            </Button>
            <Button type="default" >
              Team
            </Button>
          </nav>

        </div>

      </header>
      {/* <Header>
        <Row>
          <Col span={6}> </Col>
          <Col span={6}></Col>
        </Row>
      </Header> */}
    </>
  );
}

export default Heading;
