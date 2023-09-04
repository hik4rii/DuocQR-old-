import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
<<<<<<< HEAD
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'book' },
    { title: 'Profesores', url: 'prefesores', icon: 'person' },
    { title: 'Alumnos', url: 'alumno', icon: 'people' },
    { title: 'Escanear QR', url: 'qr', icon: 'qr-code' },
    { title: 'Administrador', url: '/administrador', icon: 'people-circle' },
    { title: 'Cerrar Session ', url: 'login', icon: 'log-out' },
=======
    { title: 'QR', url: 'home', icon: 'qr-code' },
    { title: 'Asistencia', url: 'asistencia', icon: 'book' },
    { title: 'Horario', url: 'horario', icon: 'calendar' },
>>>>>>> 0f64813ab593701c09fe33cd10fe0da0509ce472
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
