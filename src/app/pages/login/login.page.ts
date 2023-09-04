import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserService } from 'src/app/services/user.service';
import { Usuario } from '../usuario/usuario.model';
import { ToastButton, ToastController } from '@ionic/angular';
=======
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

<<<<<<< HEAD
  listaUsuarios: Usuario[]=[];

  constructor(
    private router: Router,
    private usuarioService: UserService,
    private toastController: ToastController) { }
=======
  constructor(private router: Router) { }
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472

  ngOnInit() {
  }

<<<<<<< HEAD
  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  login(usuario: any, pass:any){
    this.usuarioService.getUser(usuario.value, pass.value);
    this.mensajeToast("Bienvenido al sistema!")
    this.router.navigate(['home']);
  }
  
=======
  login(){
    this.router.navigate(['home']);
  }
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472

  register(){
    this.router.navigate(['register']);
  }

}
