import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { querypI } from 'src/app/model/queryparameters.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  dataForm = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  })

  seeForm(form: any) {
    console.log(form);
    const msguser: HTMLElement = document.getElementById('msg-user') as HTMLElement;
    msguser.innerHTML = form.name + ' estos son tus resultados';

    const timeZone = form.country.slice(-6);
    const location = form.country.slice(0, -7);    

    const queryP = {
      ayanamsa: 1,
      coordinates: location, 
      datetime: form.date + 'T' + form.time + ':00' + timeZone,
      la: 'en',
    } 

    console.log(queryP);
    
  }


}
