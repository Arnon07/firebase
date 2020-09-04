import React, {Component, Children} from 'react';
import firebase from './fireConnection'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
     email:'',
     senha:''
    };
    //this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);

    //firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        alert('usuario logado')
      }
    })
  }
  /*
  cadastrar(e){

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) =>{
      if(error.code === 'auth/invalid-email'){
          alert('Email Invalido!');
      }
      if(error.code === 'auth/weak-password'){
        alert('Senha Fraca!');
    }
    })

    e.preventDefault();
  }
  */
 logar(e){

  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
  .catch((error) =>{
    if(error.code === 'auth/wrong-password'){
        alert('Senha incorreta!');
    }else {
      alert(`Codigo do erro ${error.code}`);
    }
  })

  e.preventDefault();
}

sair(){
  firebase.auth().signOut();
  alert('Delogado');
}
    render(){
        return(
            <div>
              {/* COMENTÁRIO JSX 
              <form onSubmit={this.cadastrar}>

              <label>Email:</label> <br/>
              <input type="text" value={this.state.email}
                          onChange={(e) => this.setState({email: e.target.value})}/> <br/>
              <label>Senha:</label><br/>
              <input type="text" value={this.state.senha}

                          onChange={(e) => this.setState({senha: e.target.value})}/> <br/>
              <button type="submit">Cadastrar</button>

          </form>
              */}
                  <h1>Entrar</h1>
                  <form onSubmit={this.logar}>
                      <label>Email:</label> <br/>
                      <input type="text" value={this.state.email}
                                  onChange={(e) => this.setState({email: e.target.value})}/> <br/>
                      <label>Senha:</label><br/>
                      <input type="text" value={this.state.senha}

                                  onChange={(e) => this.setState({senha: e.target.value})}/> <br/>
                      <button type="submit">Entrar</button>

                  </form><br/>
                  <button onClick={this.sair}>Sair</button>
            </div>
        );
    }
}