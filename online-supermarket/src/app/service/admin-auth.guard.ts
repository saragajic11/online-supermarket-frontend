import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { CustomerService } from './customer.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

    constructor(private customerService: CustomerService) {}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return this.customerService.customer.pipe(map(customer=> {
            if(customer != null) {
                if(customer.role == "admin") {
                    return true;
                } else {
                    return false;
                }
            }
        }))
    }
}