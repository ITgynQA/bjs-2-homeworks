class PrintEditionItem{
  constructor (name,releaseDate,pagesCount){
this.name = name;
this.releaseDate = releaseDate;
this.pagesCount = pagesCount;
this.state = 100;
this.type = null;
  }

  fix(){
if (this.state == 100){
  return;
}
  if (this.state == 0){
  return;
}else {
 this.state = this.state * 1.5
    return this.state;
}
 }

   set state(state){
    if (state < 0){
     this._state = 0;
    }
    if (state > 100){
     this._state = 100;
    }else{
      this._state = state;
    }
  }

 get state(){
   return this._state;
 }
}

class Magazine extends PrintEditionItem {
constructor(name, releaseDate, pagesCount,type) {
  super(name, releaseDate, pagesCount);
  this.type = "magazine";
 }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount,type){
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book{
  constructor(autor, name, releaseDate, pagesCount,type) {
  super(autor, name, releaseDate, pagesCount,type);
 this.type = "novel";
 }
}

class FantasticBook extends Book{
  constructor(autor, name, releaseDate, pagesCount,type) {
  super(autor, name, releaseDate, pagesCount,type);
 this.type = "fantastic";
 }
}

class DetectiveBook extends Book{
  constructor(autor, name, releaseDate, pagesCount,type) {
  super(autor, name, releaseDate, pagesCount,type);
 this.type = "detective";
 }
}


class Library {
   constructor(name,books){
this.name = name;
this.books = [];
   }

addBook (book){
if(this.state < 30){
  return;
}else{
  this.books.push(book);
 }
}

findBookBy(type, value){
  return this.books.find(book => book[type] == value) || null;
 }

  giveBookByName(bookName) {
  const book = this.findBookBy('name', bookName);
  if (book) {
    this.books.splice(this.books.indexOf(book), 1);
  }
  return book || null;
  }
}


