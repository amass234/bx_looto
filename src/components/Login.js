import React, { Component } from 'react'
import Nav from './Home/Nav'
import {Checkbox,} from 'react-bulma-components/lib/components/form';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';

import { FaUserAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";

export class Login extends Component {
  render() {
    return (
      <div className="bg_lg">
          <Nav />
          <h1>Login</h1>
          <Section>
            <Container>
            <Columns.Column size={4} offset={4}>
                <div className="bd-notification is-info">
                    <img className="img_ls_logo" src="./static/images/logo_BX.png" alt="logo"/>
                    <h1>เข้าสู่ระบบ</h1>
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="lg_input input" type="email" placeholder="Username"/>
                        <span class="icon is-small is-left">
                         <FaUserAlt className="i_lg" />
                        </span>
                        {/* <span class="icon is-small is-right">
                            <IoIosCheckmark />
                        </span> */}
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="lg_input input" type="password" placeholder="Password"/>
                        <span class="icon is-small is-left">
                         <MdLock className="i_lg" />
                        </span>
                    </p>
                    </div>
                    <input className="lg_input_captcha"></input>
                    <input className="lg_input_captcha"></input>
                    <button className="lg_buttom">ยืนยัน</button>

                    <div className="footer_bx_lg">
                    <Checkbox>
                        <label>จำรหัส</label>
                    </Checkbox>
                    <label className="right">ลืมรหัสผ่าน</label>
                    </div>
                </div>
                <h1 className="footer_lg_text">สมัครสมาชิก<hr /></h1>
                
            </Columns.Column>
            </Container>
        </Section>
      </div>
    )
  }
}

export default Login
