import { Injectable } from '@nestjs/common';
import { ExampleDto } from './dto/example.dto';

@Injectable()
export class ExampleService {
  create(exampleDto: ExampleDto) {
    return {
      status: 200,
      data: `This action add a name ${exampleDto.first_name} ${exampleDto.last_name}`
    }
  }

  findAll() {
    return {
      status: 200,
      data: `This is Test Name`
    }
  }
}
