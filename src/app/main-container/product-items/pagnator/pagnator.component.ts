import { Component, Input } from '@angular/core';

import { PaginatorModule } from 'primeng/paginator';


@Component({
  selector: 'app-pagnator',
  templateUrl: './pagnator.component.html',
  styleUrl: './pagnator.component.css'
})

export class PagnatorComponent {
  @Input()
  PageEvent: {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

  first: number = 0;
  rows: number = 10;

   
  onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
