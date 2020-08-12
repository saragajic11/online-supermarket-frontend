import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producer } from 'src/app/model/producer.model';
import { ProducerService } from 'src/app/service/producer.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-producer',
  templateUrl: './add-producer.component.html',
  styleUrls: ['./add-producer.component.css']
})
export class AddProducerComponent implements OnInit {

  constructor(private producerService: ProducerService, private _location: Location, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProducer = new Producer(value.name, value.contact);
    this.producerService.addNewProducer(newProducer).subscribe(()=> {
      this.toastrService.success("Producer successfully deleted", "Success");
      this._location.back();
    }, error => {
      this.toastrService.error("Error while adding new producer", "Error");
    })
  }

}
