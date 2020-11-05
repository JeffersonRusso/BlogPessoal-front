import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  user:  User = new User()
  senha: String

  ngOnInit(){

  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    if  (this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp:User) => {
        this.user = resp })
        this.router.navigate(['/login'])
        alert("usuario cadastrado com sucesso")
      } else {
        alert("suas senhas não conferem")
    }
  }
}
