import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { ListComponent } from "./views/list/list.component";
import { MuniComponent } from "./views/muni/muni.component";
import { NotfoundComponent } from './views/notfound/notfound.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'lista', component: ListComponent },
    { path: 'municipio/:id', component: MuniComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }