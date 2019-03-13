import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "./store/ducks/subcategories";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import "./App.css";

import Wrapper from "./components/UI/Wrapper";
import Video from "./components/Video";
import Accordion from "./components/Accordion";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  componentDidMount = async () => {
    const { requestSubcategories } = this.props;
    requestSubcategories();
  };

  render() {
    return (
      // <Layout style={{ height: "100vh" }}>
      //   <Content style={{ padding: "0 50px" }}>
      //     <Layout
      //       style={{
      //         padding: "0px 0",
      //         background: "#fff",
      //         margin: "16px 0"
      //       }}
      //     >
      //       <Content style={{ padding: "0 24px", minHeight: 280 }}>
      //         <Video />
      //       </Content>
      //       <Sider width={200} style={{ background: "#fff" }}>
      //         <Menu
      //           theme="dark"
      //           mode="inline"
      //           defaultSelectedKeys={["1"]}
      //           defaultOpenKeys={["sub1"]}
      //           style={{ height: "100%" }}
      //         >
      //           <SubMenu
      //             key="sub1"
      //             title={
      //               <span>
      //                 <Icon type="user" />
      //                 subnav 1
      //               </span>
      //             }
      //           >
      //             <Menu.Item key="1">option1</Menu.Item>
      //             <Menu.Item key="2">option2</Menu.Item>
      //             <Menu.Item key="3">option3</Menu.Item>
      //             <Menu.Item key="4">option4</Menu.Item>
      //           </SubMenu>
      //         </Menu>
      //       </Sider>
      //     </Layout>
      //   </Content>
      // </Layout>
      <Wrapper>
        <Video />
        <Accordion />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ subcategories }) => ({
  subcategories: subcategories.data,
  activeSubcategory: subcategories.activeSubcategory
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SubcategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
