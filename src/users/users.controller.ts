import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
import { User } from "./interfaces/user.interface";

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
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
    return "Success";
  }

  @Get("list")
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
