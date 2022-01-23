import { MunicipiosapiService } from 'src/app/services/municipiosapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  muniFilter = '';
  loading:boolean = true;

  get municipiosList() {
    return this.municipiosapi.municipiosList.filter((municipio:any) => {
      this.loading = false;
      return municipio.nome.toLowerCase().indexOf(this.muniFilter.toLowerCase()) !== -1;
    })
  }

  constructor(
    private municipiosapi: MunicipiosapiService
  ) { }

  ngOnInit(): void {
    this.municipiosapi.listAll();
  }

}
