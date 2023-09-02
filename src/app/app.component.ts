import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'QR', url: 'qr', icon: 'qr-code' },
    { title: 'Asistencia', url: 'asistencia', icon: 'book' },
    { title: 'Horario', url: 'horario', icon: 'calendar' },
    { title: 'Profesores', url: 'prefesores', icon: 'person' },
    { title: 'Alumnos', url: 'alumno', icon: 'people' },
    { title: 'Cerrar Session ', url: 'login', icon: 'log-out' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
