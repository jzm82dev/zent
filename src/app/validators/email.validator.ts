import { FormControl } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


export const existEmail = (userService: UsuariosService, timeDelay: number = 1000) => {
  return (control: FormControl) => {
    return timer(timeDelay).pipe(
     switchMap(() => userService.comprobarEmail( control.value )),
      map(res => {
        control.setErrors(null);
        if(res) {
          return (res.id) ? null : { existEmail: false };
        } else {
          return { existEmail: true };
        }
      })
    );
  };
};
