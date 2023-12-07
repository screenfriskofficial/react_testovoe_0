import React, { Component } from "react";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Upload,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import { getUser } from "../../../../api/getUser";
import Loading from "../../../../components/shared-components/Loading";
import { withRouter } from "react-router-dom";

export class EditProfile extends Component {
  avatarEndpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76";

  state = {
    user: null,
  };

  async componentDidMount() {
    try {
      const userId = this.props.match.params.userId;
      const userData = await this.fetchUser(userId);
      this.setState({ user: userData });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  fetchUser = async (userId) => {
    try {
      const data = await getUser(userId);
      return {
        id: data.id,
        email: data.email,
        name: data.name,
        username: data.username,
        phone: data.phone,
        website: data.website,
        address: data.address.street,
        city: data.address.city,
        postcode: data.address.zipcode,
      };
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <Loading />;
    }
    const onFinish = (values) => {
      const key = "updatable";
      message.loading({ content: "Updating...", key, duration: 1000 });
      setTimeout(() => {
        this.setState({
          ...user,
          name: values.name,
          email: values.email,
          username: values.username,
          phone: values.phoneNumber,
          website: values.website,
          address: values.address,
          city: values.city,
          postcode: values.postcode,
        });
        setTimeout(() => {});
        message.success({ content: "Done!", key, duration: 1000 });
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const onUploadAavater = (info) => {
      const key = "updatable";
      if (info.file.status === "uploading") {
        message.loading({ content: "Uploading...", key, duration: 1000 });
        return;
      }
      if (info.file.status === "done") {
        this.getBase64(info.file.originFileObj, (imageUrl) =>
          this.setState({
            avatarUrl: imageUrl,
          }),
        );
        message.success({ content: "Uploaded!", key, duration: 1000 });
      }
    };

    const onRemoveAvater = () => {
      this.setState({
        avatarUrl: "",
      });
    };

    const { avatarUrl } = this.state;

    return (
      <>
        <Flex
          alignItems="center"
          mobileFlex={false}
          className="text-center text-md-left"
        >
          <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
          <div className="ml-md-3 mt-md-0 mt-3">
            <Upload
              onChange={onUploadAavater}
              showUploadList={false}
              action={this.avatarEndpoint}
            >
              <Button type="primary">Change Avatar</Button>
            </Upload>
            <Button className="ml-2" onClick={onRemoveAvater}>
              Remove
            </Button>
          </div>
        </Flex>
        <div className="mt-4">
          <Form
            name="basicInformation"
            layout="vertical"
            initialValues={{
              name: user.name,
              email: user.email,
              username: user.username,
              phone: user.phone,
              website: user.website,
              address: user.address,
              city: user.city,
              postcode: user.postcode,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Address" name="address">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Post code" name="postcode">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );
  }
}

export default withRouter(EditProfile);
