import { add , sub ,IncCounter} from './my.component'

xdescribe("Addition suit",()=>{
    it("Should return 0 if 0+0 Test Happy Flow",()=>{
        expect(add(0,0)).toEqual(0)
    });
    it("Should return 30 if 10+20 Test Happy Flow",()=>{
        expect(add(10,20)).toEqual(30)
    })
})

// describe("Subtraction suit which always give positive",()=>{
//     it("Should return 0 if 0-0 Test Happy Flow",()=>{
//         expect(sub(0,0)).toEqual(0)
//     });
//     it("Should return 10 if 10-20 Test Happy Flow",()=>{
//         expect(sub(10,20)).toEqual(10)
//     });
//     it("Should return 10 if -10-20 Test Happy Flow",()=>{
//         expect(sub(-10,-20)).toEqual(10)
//     });
//     it("Should return 'Operation not found' if -10-10 Test Happy Flow",()=>{
//         expect(sub(-10,10)).toEqual("Operation not found")
//     })
// })

xdescribe("IncCounter suit ",()=>{
    xit("Should return 0 if 0-0 Test Happy Flow",()=>{
       
    });
})

