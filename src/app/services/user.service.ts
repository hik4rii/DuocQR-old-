import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Usuario } from '../pages/usuario/usuario.model';
=======
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  usuarios: Usuario[]=[
    {
      id: '1',
      usuario: 'Bruno Riveros',
      contrasenia: '1234',
      tipo: 'Estudiante'
    },
    {
      id: '2',
      usuario: 'Francisco Juillet',
      contrasenia: '1234',
      tipo: 'Docente'
    }
  ]

  constructor() { }

  getAll(){
    return[...this.usuarios]
  }

  getProfesor(id: string){
    return{
      ...this.usuarios.find(aux => {
        return aux.id === id
      })
    }
  }

  getUser(user: string, pass: string) {
    return {
      ...this.usuarios.find(aux => {
        return aux.usuario === user && aux.contrasenia === pass
      })
    }
  }
=======
  constructor() { }
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472
}
