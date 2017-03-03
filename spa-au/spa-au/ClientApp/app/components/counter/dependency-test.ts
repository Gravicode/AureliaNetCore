export class DependencyTest {
    public test:string;
    public WriteTest(){
        console.log(this.test);
    }
   constructor(){
      this.test = "Test is succesfull!!!";
   }
}