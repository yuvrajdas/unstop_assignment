import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { IUserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'email', 'role'];
  userDetailsDataSource = new MatTableDataSource<IUserData>([]);

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.userService.userData$.subscribe(data => {
      this.userDetailsDataSource.data = data;

      // Run the update logic after the view stabilizes
      setTimeout(() => {
        this.updateTableSettings();
      });
    });
  }

  ngAfterViewInit() {
    this.updateTableSettings();
  }

  private updateTableSettings() {
    if (this.paginator) {
      this.userDetailsDataSource.paginator = this.paginator;
      this.paginator.length = this.userDetailsDataSource.data.length;
      this.paginator._changePageSize(this.paginator.pageSize); // Force refresh
    }
    if (this.sort) {
      this.userDetailsDataSource.sort = this.sort;
    }

    // Mark the view to be checked again
    this.cdr.detectChanges();
  }
}
