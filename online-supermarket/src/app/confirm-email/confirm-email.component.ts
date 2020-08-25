import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmEmailService } from '../service/confirm-email.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private confirmEmailService: ConfirmEmailService) { }
  token: string;
  isSuccessfullyConfirmed: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      this.token = params.get('token');
      if(this.token != null) {
        this.confirmEmailService.confirmEmail(this.token).subscribe(()=> {
          this.isSuccessfullyConfirmed = true;
        }, error=> {
          this.isSuccessfullyConfirmed = false;
        })
      }
    })
  }

}
