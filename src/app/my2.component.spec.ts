import { MyComponent } from "./my2.component";
import { log } from "util";
// beforeAll(()=>{

// })


xdescribe("The Users Suit",()=>{
    let myComponent
    beforeEach(()=>{
        myComponent= new MyComponent();
        console.log("This will execute before each 'it' block");
        
    })
    afterEach(()=>{
        myComponent=null;
        console.log(("This will execute after every 'it' block "));
        
    })

    it("Test Happy flow",()=>{
        expect(myComponent.concatStr('John')).toEqual("Hello John !")
    })
    it("Test Happy flow",()=>{
        expect(myComponent.concatStr('John')).toContain("Hello John")
    })
    it("Test Happy flow",()=>{
        expect(myComponent.getUsers()).toContain("John")
    })
    it("Test Happy flow",()=>{
        expect(myComponent.incValue()).toBe(0)
    })
})