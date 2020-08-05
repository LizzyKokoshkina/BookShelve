import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from '../app/Services/BookService';
import { DialogService } from './Services/DialogService';
import { AddBookComponent } from './Dialog/AddBookComponent';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    BookService,
    DialogService
  ],
  entryComponents: [
    AddBookComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
