import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GruposService } from '../../services/grupos.service';
import { LoadingService } from '../../services/loading.service';
import { Grupo } from 'src/app/models/grupo';
import { GlobalProvider } from "../../providers/global";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  constructor( private activatedRoute: ActivatedRoute,
               private grupoSvc: GruposService,
               public loading: LoadingService,
               public global: GlobalProvider ) {
  }

  ngOnInit() { }

  getUsers( ){
    
  }


}
