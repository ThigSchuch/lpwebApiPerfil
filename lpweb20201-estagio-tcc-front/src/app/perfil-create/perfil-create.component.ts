import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PerfilCreateService } from '../perfil-create.service';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfil-create',
  templateUrl: './perfil-create.component.html',
  styleUrls: ['./perfil-create.component.css']
})
export class PerfilCreateComponent implements OnInit {
  perfil: any;
  temPerfil = null;

  constructor(
    public cadastro$: PerfilCreateService,
    public auth$: AuthService,
    private router: Router,
    private perfil$: PerfilService
  ) {}

  user: any;
  nome: string = null;
  sexo: string = null;
  cpf: string = null;
  telefone: string = null;
  endereco: string = null;
  estado_uf: string = null;
  cidade: string = null;
  cep: string = null;
  estados = [
    'AC', 'AL', 'AP', 'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR',
    'SC', 'SP', 'SE',
    'TO',
  ];

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.perfil$.perfilLogado().subscribe(
        (dados) => (this.perfil = dados),
        (erro) => (this.temPerfil = false)
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  sendData() {
    let dados = {
      usuario: this.user.id,
      nome: this.nome,
      sexo: this.sexo,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
      estado_uf: this.estado_uf,
      cidade: this.cidade,
      cep: this.cep,
    };
    this.cadastro$.cadastrarPerfil(dados);
  }
}
