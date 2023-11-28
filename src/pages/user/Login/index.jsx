import React from "react";
import './index.less'
import {Button, Checkbox, Form, Input} from "antd";
import {login} from "@/services/user";
import {isEmpty} from 'lodash'
import {useNavigate} from 'react-router-dom'
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export const Login = () => {
    const navigateTo = useNavigate()

    const onFinish = async (values) => {
        const res = await login(values)
        if (!isEmpty(res)) {
            navigateTo('/chat')
        }
    }

    return (
        <div className={'bg'}>
            <div className={'login-block'}>
                <div className={'title'}>Sign in to JieXin</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="telephone"
                        rules={[{required: true, message: 'Please input your Telephone!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Telephone"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign in
                        </Button>
                        Or <a href="#/register">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}