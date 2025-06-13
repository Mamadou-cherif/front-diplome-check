import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tableData } from './data';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-datatables',
    imports: [CommonModule, NgxPaginationModule],
    templateUrl: './datatables.component.html',
    styleUrl: './datatables.component.scss'
})
export class DatatablesComponent implements OnInit {
  tableData = tableData;
  currentPage = 1;
  itemsPerPage = 10;

  constructor() { }

  ngOnInit(): void {
    // Initialize data or fetch it from an API
  }

  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.tableData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages() {
    return Math.ceil(this.tableData.length / this.itemsPerPage);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginationArray() {
    return new Array(this.getTotalPages()).fill(0).map((_, index) => index + 1);
  }
}

