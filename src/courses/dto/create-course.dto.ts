import { IsString } from 'class-validator';

export class CreateCourseDTO {
    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

    @IsString({ each: true }) // Validando que cada elemento do array precisa ser uma string
    readonly tags: string[]
}