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

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
    this.marksAvg = {};
    this.allMarksAvg = 0;
  }

  addMark(mark,subject){

    if(mark < 2 || mark > 5){
      return
    }
    if (!this.marks.hasOwnProperty(subject)){
       this.marks[subject] = [mark];
    }
    else {
        this.marks[subject].push(mark)
    }
     return this.marks;
  }

 getAverageBySubject(subject){
    if(!this.marks.hasOwnProperty(subject)){
      return this.marksAvg[subject] = 0;
    }
    this.marksAvg[subject] = this.marks[subject].reduce((a, b) => a + b, 0) / this.marks[subject].length;
    return this.marksAvg[subject];
  }


  getAverage(){
      let allMarks = 0;
      for (const key in Object.keys(this.marks))
      {
         allMarks = allMarks + this.getAverageBySubject(Object.keys(this.marks)[key]);
      }
      if (allMarks == []){
      return 0;
      }
      this.allMarksAvg = allMarks / Object.keys(this.marks).length
      return this.allMarksAvg
  }
}








