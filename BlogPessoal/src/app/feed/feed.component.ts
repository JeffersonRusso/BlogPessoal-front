  import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem : Postagem = new Postagem()
  listaPostagem: Postagem[]

  tema: Tema = new Tema()
  listaTema : Tema[]
  idTema : number



  constructor(
    private PostagemService : PostagemService,
    private temaService : TemaService
  ) { }

  findAllPostagem() {
    this.PostagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }
  
  findAllTema() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  ngOnInit(){
    window.scroll(0,0)

    this.findAllPostagem()
    this.findAllTema()

  }

}
