// Library Import
import { Link } from 'react-router-dom';

// Components Import
import Input from '../Components/Input'

// Styles Import
import './Login.css'; // Removido o uso de CSS Modules para strings simples

import React from 'react'
import SendForm from '../Components/SendForm';

const Login = () => {
  return (
    <div className="container">
      <div className="main_title">
        <h1 className="title">Bem-vindo de volta .!</h1>

        <div className="skip_section">
          <div className="skip_box">
            <i><p>Pular Login?</p></i>
          </div>
          <span><hr /></span>
        </div>
      </div>

      <div className="form_container">
        <div className="form_title">
          <h3 className="sub_title">Login</h3>
          <p>Bom tê-lo de volta</p>
        </div>

        <form className="form" action="">
          <Input type={'text'} placeholder={'Usuário'} />
          <Input type={'text'} placeholder={'Senha'} />
          <SendForm type={'text'} msg={'Login'} style={'purple_btn'}></SendForm>
        </form>

        <p className="go_reg">Não tem uma conta? <Link to="/Register">Cadastre-se</Link></p>
      </div>

      <div className="fcircle"></div>
      <div className="scircle"></div>
    </div>
  );
}

export default Login;
