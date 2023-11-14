import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { EditorialModule } from '../editorial/editorial.module';
import { BookModule } from './book.module';


const routes: Routes = [{
 path: 'books',
 children: [
   {
     path: 'list',
     component: BookListComponent
   },
   {
     path: ':id',
     component: BookDetailComponent
   },
 ]
}];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    EditorialModule,
    HttpClientModule,
    BookRoutingModule
  ],
 exports: [RouterModule]
})
export class BookRoutingModule { }
