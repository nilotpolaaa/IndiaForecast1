import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from '../common-http.service';

@Component({
  selector: 'app-rainfall-table-data',
  templateUrl: './rainfall-table-data.component.html',
  styleUrls: ['./rainfall-table-data.component.scss']
})
export class RainfallTableDataComponent implements OnInit {
  tableData: any;

  constructor(private httpservice: CommonHttpService) { }

  ngOnInit() {
    this.getRainfallData();
  }

  getRainfallData() {
    this.httpservice.makeGetApiCall('RAINFALLDATA', {}).subscribe(
      data => {
        console.log('hereee ', data);
        this.tableData = data;
      }
    )
  }


  changeEvent(e) {
    console.log(e);
  }

}
