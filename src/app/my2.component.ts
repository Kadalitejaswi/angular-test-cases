export class MyComponent {
    val = 0;
    concatStr(str):string{
        return "Hello "+str+ " !"
    }

    users = ['John','Sam','Mike'];
    getUsers(){
      return this.users;
    }
    incValue(){
        return this.val
    }
}