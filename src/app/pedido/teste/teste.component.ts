import { Component, OnInit } from '@angular/core';
import { ProcessoRequest } from '../../../model/ProcessoRequest';
import { TesteService } from '../../../providers/teste-service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html'
})
export class TesteComponent implements OnInit {

  public processoRequest: ProcessoRequest;
  constructor(private testeService: TesteService) { 
    this.processoRequest = new ProcessoRequest();
  }

  ngOnInit() {
  }

  public buscarProcesso(): void{
console.log(this.processoRequest);
    this.testeService.Send(this.processoRequest, data =>{
      console.log(data);
    })

  }

}
