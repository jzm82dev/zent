

import { Injectable } from '@angular/core';
import { Grupo } from 'src/app/models/grupo';
import { User } from 'src/app/models/user';
/*
  Generated class for the GlobalProvider provider.
*/
@Injectable()
export class GlobalProvider {

  public grupo: Grupo = null ;
  public usuario: any = null;

}
