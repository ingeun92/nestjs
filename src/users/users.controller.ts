import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
import { User } from "./schemas/user.schema";

@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Post("test")
  postTest(@Body() body: string) {
    return body;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get("list")
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
