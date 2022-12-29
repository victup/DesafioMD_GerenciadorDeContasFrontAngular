import { ContaModel } from './../components/contas/conta.model';
import { API_PATH } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private httpClient: HttpClient) { }

  obterTodas():Observable<any>{
    return this.httpClient.get(`${API_PATH}Conta`);
  }

  cadastrar(conta: ContaModel):Observable<any>{
    return this.httpClient.post(`${API_PATH}Conta`, conta);
  }

}
