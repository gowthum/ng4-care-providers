import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormBuilder,Validators} from '@angular/Forms';

@Component({
  selector: 'app-ref',
  templateUrl: './ref-details.component.html',
  styleUrls: ['./ref-details.component.scss']
})
export class RefComponent {
  private refuser: object = {};
  private resp: any = '';
  private title: String = 'App Works!';
construcor
  constructor(private http: Http) {}

  onCreateRefUser(): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
     this.http.post('referenceslist', {
      data: this.refuser
    }, {
      headers: headers
    })
    .map(res => res.json())
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Request Completed')
    );
  }
}
