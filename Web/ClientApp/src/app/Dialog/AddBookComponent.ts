import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { BookType, Book } from "../Models/book";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { BookService } from "../Services/BookService";

@Component({
  selector: 'AddBookComponent',
  templateUrl: './AddBookComponent.html',
  styleUrls: ['./AddBookComponent.css']
})

export class AddBookComponent {
  enum = BookType;
  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    bookType: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]),
    pagesAmount: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
    private bookService: BookService) { }

  addBook(): void {
    if (this.bookForm.invalid) {
      return;
    }
    const model = new Book();
    model.title = this.bookForm.controls.title.value;
    model.author = this.bookForm.controls.author.value;
    model.type = parseInt(this.bookForm.controls.bookType.value, 10);

    model.year = new Date(this.bookForm.controls.year.value);
    model.pagesAmount = parseInt(this.bookForm.controls.pagesAmount.value, 10);
    this.bookService.post(model).subscribe(() => this.dialogRef.close(true));
  }



}
