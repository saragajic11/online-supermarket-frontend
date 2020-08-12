import { Component, OnInit, ViewChild } from '@angular/core';
import { Producer } from 'src/app/model/producer.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProducerService } from 'src/app/service/producer.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-producer',
  templateUrl: './edit-producer.component.html',
  styleUrls: ['./edit-producer.component.css']
})
export class EditProducerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private producerService: ProducerService, private toastrService: ToastrService, private _location: Location) { }
  producer: Producer;
  producerId: number;
  @ViewChild('producerForm', { static: false }) form: NgForm;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.producerId = +params.id;
      this.producerService.getProducerById(this.producerId).subscribe(producer => {
        this.producer = producer;
        this.form.setValue({
          name: this.producer.producerName,
          contact: this.producer.producerContact
        })
      })
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const editedProducer = new Producer(value.name, value.contact);
    this.producerService.updateProducer(this.producerId, editedProducer).subscribe(() => {
      this.toastrService.success("Producer successfully updated", "Success");
      this._location.back();
    }, error => {
      this.toastrService.error("Error while updating producer", "Error");
    })
  }

}
