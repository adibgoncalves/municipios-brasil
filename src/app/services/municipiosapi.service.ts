import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type municipio = {
  id: number,
  nome: string,
  microrregiao: {
    id: number,
    nome: string,
    massorregiao: {
      id: number,
      nome: string,
      UF: {
        id: number,
        sigla: string,
        nome: string,
        regiao: {
          id: number,
          sigla: string,
          nome: string
        }
      }
    }
  },
  "regiao-imediata": {
    id: number,
    nome: string,
    "regiao-intermediaria": {
      id: number,
      nome: string,
      UF: {
        id: number,
        sigla: string,
        nome: string,
        regiao: {
          id: number,
          sigla: string,
          nome: string
        }
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class MunicipiosapiService {
  private url:String = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';

  municipiosList:any = []
  municipio:any = {}

  constructor(
    private http: HttpClient
  ) { }

  listAll(){
    this.http.get(`${this.url}`)
      .subscribe(
        response => {
          this.municipiosList = response
          this.municipiosList = this.sortMunicipios(response)
            .filter((municipio:municipio) => municipio.nome)
        }
      )
  }

  getMunicipio(id:string){
    this.http.get(`${this.url}/${id}`)
    .subscribe(
      response => {
        this.municipio = response;
        console.log(response)
      }
    )
  }

  private sortMunicipios(municipiosList:any){
    return municipiosList.sort((a:any, b:any) => {
      return (a.nome > b.nome ? 1 : -1)
    })
  }
}
