import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from '../common-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rainfall-table-data',
  templateUrl: './rainfall-table-data.component.html',
  styleUrls: ['./rainfall-table-data.component.scss']
})
export class RainfallTableDataComponent implements OnInit {
  tableData: any;
  tableDataMandal: any;
  constructor(private httpservice: CommonHttpService, private http: HttpClient) { }

  ngOnInit() {
    this.getRainfallData();
    this.getMandalData();
  }

  getRainfallData() {
    this.httpservice.makeGetApiCall('RAINFALLDATA', {}).subscribe(
      data => {
        this.tableData = this.setRainfallData(data);
      }
    );
  }

  getMandalData() {
      this.httpservice.makeGetApiCall('RAINFALLDATAMANDAL', {}).subscribe(
        data => {
              console.log("response", data);
              this.tableDataMandal = this.setMandalData(data);
        }
      );
  }

  changeEvent(e) {
    this.getRainfallData();
    this.getMandalData();
  }

  setRainfallData(data) {
    this.tableData = [];
     // tslint:disable-next-line: forin
    for (const i in data['Andhra Pradesh']) {
       let obj = {};
       let keys = Object.keys(data['Andhra Pradesh'][i].rainfallDataMap);
       obj['District'] = i;
       for (const j of keys) {
         obj[j] = data['Andhra Pradesh'][i].rainfallDataMap[j].totalLevelValue1;
      }
       this.tableData.push(obj);
     }
    return this.tableData;
  }

  setMandalData(data) {
    this.tableDataMandal = [];
    let keys = Object.keys(data);
    for (let j of keys) {
      let obj = {};

      let key1 = Object.keys(data[j]);
      for(let k of key1) {
        obj['Mandal'] = k;
        obj['District'] = j;
        let rain = Object.keys(data[j][k]['rainfallDataMap']);
        for(let l of rain) {
          obj[l] = data[j][k]['rainfallDataMap'][l].totalLevelValue1;
        }
        console.log('hiiii', obj);
        this.tableDataMandal.push(obj);
        obj = {};
      }
    }
    console.log('neeeeeeeeeeeeeeeeee', this.tableDataMandal);
    return this.tableDataMandal;
  }
}
