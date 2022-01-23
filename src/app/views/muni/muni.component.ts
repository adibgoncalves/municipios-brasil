import { MunicipiosapiService } from 'src/app/services/municipiosapi.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-muni',
  templateUrl: './muni.component.html',
  styleUrls: ['./muni.component.css']
})
export class MuniComponent implements OnInit {
  id:any = ''

  getMunicipio(){
    return this.municipiosapi.municipio;
  }

  constructor(
    private route: ActivatedRoute,
    private municipiosapi: MunicipiosapiService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.municipiosapi.getMunicipio(this.id);
  }
}
