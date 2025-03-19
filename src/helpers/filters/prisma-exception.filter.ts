import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    // ⬅️ Usamos unknown para mais segurança
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Ocorreu um erro inesperado';
    let errorName = 'UnknownError';

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === 'P2002') {
        status = HttpStatus.BAD_REQUEST;
        message = `Já existe um registro com esse valor para o campo ${exception.meta?.target as string}`;
      }
      errorName = exception.constructor.name;
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Erro de validação ao processar a requisição';
      errorName = exception.constructor.name;
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      errorName = exception.constructor.name;
    } else if (exception instanceof Error) {
      // Garante que seja um erro do JavaScript antes de acessar .name
      errorName = exception.name;
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      message,
      error: errorName,
    });
  }
}
