export class UserModel{
    email:String;
    password:String;
    otp?:String
    constructor(){
        this.email = "";
        this.password = "";
        this.otp = "";
    }
}