export class UserModel{
    name:String;
    email:String;
    password:String;
    otp?:String
    constructor(){
        this.name ="";
        this.email = "";
        this.password = "";
        this.otp = "";
    }
}