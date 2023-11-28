import React from "react";
import './index.less'
import {Button, Form, Input} from "antd";
import {LockOutlined, PhoneOutlined, UserOutlined} from "@ant-design/icons/lib/icons";
import {register} from "../../../services/user";
import {isEmpty} from 'lodash'
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigateTo = useNavigate();

    const onFinish = async (values) => {
        const res = await register(values)
        if (!isEmpty(res)) {
            navigateTo('/login')
        }
    }

    return (
        <div className={'bg'}>
            <div className={'login-block'}>
                <div className={'title'}>Sign up to JieXin</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish} i
                >
                    <Form.Item
                        name="telephone"
                        rules={[{required: true, message: 'Please input your telephone number!'}]}
                    >
                        <Input
                            prefix={<PhoneOutlined className="site-form-item-icon"/>}
                            type="tel"
                            placeholder="Telephone number"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: 'Please input your Username!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
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
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register