import { FormControl } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { analytics } from 'firebase';



export const uniqueTelefono = (userService: UsuariosService, timeDelay: number = 1000) => {
  return (control: FormControl) => {
    return timer(timeDelay).pipe(
     switchMap(() => userService.comprobarTelefono( control.value )),
      map(res => {
        control.setErrors(null);
        if(res) {
          return (!res.id) ? null : { notUnique: true };
        } else {
          return null;
        }
      })
    );
  };
};


export const existeTelefono = (userService: UsuariosService, timeDelay: number = 1000) => {
  return (control: FormControl) => {
    return timer(timeDelay).pipe(
     switchMap(() => userService.comprobarTelefono( control.value )),
      map(res => {
        control.setErrors(null);
        if(res) {
          return null ;
        } else {
          return  { exitTelefono: true };
        }
      })
    );
  };
};

export const verificateCode = (userService: UsuariosService, timeDelay: number = 1000, telephone: string) => {
  return (control: FormControl) => {
    return timer(timeDelay).pipe(
     switchMap(() => userService.checkVerificateCode( control.value, telephone )),
      map(res => {
        control.setErrors(null);
        if(res) {
          return null ;
        } else {
          return  { correctCode: true };
        }
      })
    );
  };
};
