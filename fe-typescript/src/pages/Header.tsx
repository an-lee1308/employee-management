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
          {/* <Row>
            <Col xs={24} xl={8}>
              One of three columns
            </Col>
            <Col xs={24} xl={8}>
              One of three columns
            </Col>
            <Col xs={24} xl={8}>
              One of three columns
            </Col>
          </Row> */}

          <nav>

            <Button type="primary" style={{ margin: "auto", borderRadius: "20px" }}>
              Employee
            </Button>
            <Button type="default" style={{ margin: "auto", borderRadius: "20px" }}>
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
