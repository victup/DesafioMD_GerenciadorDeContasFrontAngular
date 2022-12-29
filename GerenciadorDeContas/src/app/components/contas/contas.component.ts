import { IConta } from '../Interfaces/IConta';
import { Component, Input } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent {

  constructor(private contaService: ContasService) {  }

  contas: Array<any> = new Array();


  obterTodasAsContas(){
    this.contaService.obterTodas().subscribe(contas => {
      this.contas = contas;
    }, error => {console.log(error)})

    console.log(this.contas);
  }

}
