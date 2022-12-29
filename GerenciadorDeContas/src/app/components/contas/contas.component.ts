import { ContaModel } from './conta.model';
import { Component, Input } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent {

  constructor(private contaService: ContasService) {  }

  conta: ContaModel = new ContaModel();
  contas: Array<any> = new Array();

  public formGroup!: FormGroup;

  ngOnInit(){
    this.obterTodasAsContas();
  }

  cadastrarNovaConta(){
    if(this.conta == null || this.conta.nome == null || this.conta.valorOriginal == null || this.conta.dataPagamento == null || this.conta.dataVencimento == null){
      alert("Você precisa preencher todos os campos");
    }else{
      console.log(this.conta);
      this.contaService.cadastrar(this.conta).subscribe(contas => {
      this.conta = new ContaModel();

      this.obterTodasAsContas();

      }, error => {
        alert('Falha no servidor: ');
        console.log('Erro ao cadastrar conta: ', error)
      })
    }


  }

  obterTodasAsContas(){
    this.contaService.obterTodas().subscribe(contas => {
      this.contas = contas;
    }, error => {
      alert('Falha no servidor');
      console.log('erro ao listar contas.', error)
    })

    console.log(this.contas);
  }

}
