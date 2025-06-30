class Student{
  constructor(name,grade) {
    this.name=name;
    this.grade=grade;


  }
  introduce(){
    console.log(`Hi ,im ${this.name} is ${this.grade} and in grade ${this.grade}`);
  }
  promote(){
    this.grade++
    console.log(`${this.name} has been promoted to grade${this.grade}`);
  }

}
