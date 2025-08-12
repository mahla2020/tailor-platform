import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userData: Omit<UserDto, 'id'>): Promise<UserDto> {
    const createdUser = await this.usersService.create(userData);
    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role as UserDto['role'],
    };
  }
  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.findAll();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as UserDto['role'],
    }));
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role as UserDto['role'],
    };
  }
}
