import { Injectable } from '@nestjs/common';

// @Injectable()
export function DataBaseProvider(arg: any, arg2: any) {
  @Injectable()
  class FindOne {
    state = [3, 5];
    findOne() {
      return this.state;
    }
  }
  //   constructor(arg: any, arg2: any) {}
  //   private state = [08, 89];
  //   getData() {
  //     return this.state;
  //   }
}
