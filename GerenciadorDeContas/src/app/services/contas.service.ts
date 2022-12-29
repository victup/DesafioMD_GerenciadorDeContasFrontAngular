import { API_PATH } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IConta} from '../components/Interfaces/IConta';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  constructor(private httpClient: HttpClient) { }

  obterTodas():Observable<any>{
    return this.httpClient.get(`${API_PATH}Conta`);
  }

}
