import { Body, Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Get("ing")
  getIng(): string {
    return this.usersService.getIng();
  }

  @Get("sum/:x&:y")
  getSum(
    @Param("x", ParseIntPipe) x: number,
    @Param("y", ParseIntPipe) y: number,
  ): number {
    return this.usersService.getSum(x, y);
  }

  @Get("test")
  getTest(@Body() body: string): string {
    return body;
  }
}
