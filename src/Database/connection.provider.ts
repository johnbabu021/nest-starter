import { Injectable } from "@nestjs/common";

@Injectable()
export class NewConnection{
    private state=[1,3]
    getClass(){
        return this.state
    }
}