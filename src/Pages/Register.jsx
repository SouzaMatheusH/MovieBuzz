// Library Import
import { Link } from 'react-router-dom';

// Components Import
import Input from '../Components/Input'

// Styles Import
import './Register.css';

import React from 'react'
import SendForm from '../Components/SendForm';

const Register = () => {
  return (
    <div className="container">
      <div className="main_title">
        <h1 className="title">Junte-se a nós .!</h1>

        <div className="skip_section">
          <div className="skip_box">
            <i><p>Pular Login?</p></i>
          </div>
          <span><hr /></span>
        </div>

      </div>

      <div className="form_container">

        <div className="form_title">
          <h3 className="sub_title">Cadastre-se</h3>
          <p>Preencha o formulário</p>
        </div>

        <form className="form" action="">
          <Input type={'text'} placeholder={'Usuário'}/>
          <Input type={'text'} placeholder={'Email'}/>
          <Input type={'text'} placeholder={'Senha'}/>
          <Input type={'text'} placeholder={'Repita a senha'}/>
          <SendForm type={'text'} msg={'Enviar'} style={'blue_btn'}></SendForm>
        </form>

        <p className="go_reg">Já tem uma conta? <Link to="/">Login</Link></p>
      </div>

      <div className="fcircle"></div>
      <div className="scircle"></div>
    </div>
  )
}

export default Register;
