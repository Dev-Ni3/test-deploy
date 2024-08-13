import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


class ExampleDto {
    @ApiProperty()
    @IsString()
    first_name: string;

    @ApiProperty()
    @IsString()
    last_name: string;
}

export { ExampleDto }