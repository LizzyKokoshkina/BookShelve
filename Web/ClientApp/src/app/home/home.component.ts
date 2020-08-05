import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Book, BookType } from '../Models/book';
import { BookService } from '../Services/BookService';
import { DialogService } from '../Services/DialogService';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { interval } from 'rxjs';
import { EnumHelperService } from '../Services/EnumService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  books = new Array<Book>();
  displayedColumns: string[] = ['title', 'author', 'bookType', 'year', 'pagesAmount','delete'];
  datePipe = new DatePipe('en-Us');
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Book>(this.books);
  refreshTime = 100000;
  storageKey = 'books';
  types = EnumHelperService.enumSelector(BookType);


  constructor(private bookService: BookService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getBooks();
    interval(this.refreshTime).subscribe(() => this.getBooks())
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getBooks(): void {
    this.bookService.get().subscribe((result: Array<Book>) => {
      this.books = result;
      this.dataSource.data = this.books;
      this.dataSource.paginator = this.paginator;
      this.handleStorage();
    });
  }

  handleStorage(): void {
    sessionStorage.clear();
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.books));
  }

  openDialog(): void {
    this.dialogService.showAddBook().subscribe((result) => {
      if (result) {
        this.getBooks();
      }
    });
  }

  delete(book: Book): void {
    this.bookService.delete(book.id).subscribe(() => {
      this.getBooks();
    });
  }

  getEnumValue(type: BookType): string {
    return this.types.find(i => type == i['value'])['title'];
  }

}
