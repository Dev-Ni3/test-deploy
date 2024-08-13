import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ApiTags } from '@nestjs/swagger';
import { ExampleDto } from './dto/example.dto';

@Controller()
@ApiTags('Example Module')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) { }

  @Post('create-details')
  create(@Body() exampleDto: ExampleDto) {
    return this.exampleService.create(exampleDto);
  }

  @Get('user-details')
  findAll() {
    return this.exampleService.findAll();
  }
}
