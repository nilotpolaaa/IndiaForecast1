import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.scss']
})
export class DataTabComponent implements OnInit {
  @Input() tableDataa: any;
  @Input() tableDataMandal: any;
  @Output() eventChange = new EventEmitter<any>();
  show = true;
  threshold = 0.01;
  columns = ['District', '17:30-23:30', '24 Hrs', '23:30-05:30', '11:30-17:30', '05:30-11:30'];
  columns1 = ['District', 'Mandal', '17:30-23:30', '24 Hrs', '23:30-05:30', '11:30-17:30', '05:30-11:30'];
  dataSource : any;
  displayedColumns : any;
  dataSource1 : any;
  displayedColumns1 : any;
  constructor() {
   }

  ngOnInit() {
    this.displayedColumns = this.columns;
    if (this.tableDataa) {
      this.dataSource = this.tableDataa;
    }
    if (this.tableDataMandal) {
      this.dataSource1 = this.tableDataMandal;
    }
  }
  ngOnChanges() {
    if (this.tableDataa) {
      this.dataSource = this.tableDataa;
      this.displayedColumns = this.columns;
    }
    if (this.tableDataMandal) {
      this.dataSource1 = this.tableDataMandal;
      this.displayedColumns1 = this.columns1 ;
    }
  }

  onButtonClick() {
    this.eventChange.emit('emmited value');
    this.show = !this.show;
  }
  updateThreshold() {
      console.log(this.threshold);
  }

}
