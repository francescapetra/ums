import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot) {

    this.router.navigate(['users']);

   console.log(status);
   console.log(route);

    //return true;

    return false;//il modulo non viene caricato e nemmeno le rotte
  }
}
