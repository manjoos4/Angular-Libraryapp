import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this.auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/products'])
      return false

    }
  }
}
