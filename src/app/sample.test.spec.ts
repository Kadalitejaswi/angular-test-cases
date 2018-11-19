function helloWorld():string{
    return "Hello World..!"
}

// describe(string,function)
xdescribe("Hello world Suit..!",function(){
    it("Say hello",()=>{
        expect(helloWorld()).toEqual("Hello World..!")
    });
    it("Say hello",()=>{
        expect(helloWorld()).toBe("Hello World..!")
    });
    it("Say hello",()=>{
        expect(helloWorld()).toContain("World..!") // verify that word is there are not
    })
})
