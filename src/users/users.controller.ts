import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
import { User } from "./schemas/user.schema";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Post("test")
  postTest(@Body() body: string): string {
    return body;
  }

  @Post()
  async createdb(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
    return "Success";
  }

  @Get("list")
  async findAlldb(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
