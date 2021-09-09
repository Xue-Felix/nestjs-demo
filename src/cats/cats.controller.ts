import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';


interface User {
  name: string
}

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService){}

  @Get()
  async findAll(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.catsService.findAll())
    })
  }
  
  @Post("/create")
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('/id/:id')
  findById(@Param("id") id):string {
    console.log(id);
    return `id: ${id} - cool`
  }
  
  @Post()
  create(): string{
    return "";
  }
}
