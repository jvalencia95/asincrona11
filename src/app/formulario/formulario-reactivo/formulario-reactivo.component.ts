import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  public formLogin!: FormGroup
  valido = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(10)]],
      correo: ["", [Validators.required, Validators.email]],
      area: ["", [Validators.required, Validators.maxLength(500)]]
    })
  }

  verificar() {
    if (this.formLogin.valid) {
      this.valido = true
    } else {
      this.valido = false
    }
  }
}
