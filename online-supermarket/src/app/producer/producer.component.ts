import { Component, OnInit } from '@angular/core';
import { ProducerService } from '../service/producer.service';
import { Producer } from '../model/producer.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(private producerService: ProducerService, private router: Router, private toastrService: ToastrService) { }
  producers: Producer[];
  dataSource = new MatTableDataSource<Producer>();

  displayedColumns: string[] = ['id', 'producerName', 'producerContact', 'edit', 'delete'];

  ngOnInit(): void {
    this.producerService.getAllProducers().subscribe(producers => {
      this.producers = producers;
      this.dataSource.data = producers;
    })
  }

  onAddNewProducer() {
    this.router.navigate(['producers/new'])
  }

  onEditProducerClicked(id: number) {
    this.router.navigate(['producers/edit/'+ id]);
  }

  onDeleteProducerClicked(id: number) {
    this.producerService.deleteProducer(id).subscribe(()=> {
      this.ngOnInit();
      this.toastrService.success("Producer successfully deleted", "Success");
    }, error=> {
      this.toastrService.error("Error while deleting producer", "Error");
    })
  }

}
