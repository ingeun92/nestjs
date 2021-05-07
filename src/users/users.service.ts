import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getHello(): string {
    return "Hello World!";
  }

  getIng(): string {
    return "Ing";
  }

  getSum(a: number, b: number): number {
    return a + b;
  }
}
