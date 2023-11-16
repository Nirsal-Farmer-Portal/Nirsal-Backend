import { HttpException, HttpStatus } from '@nestjs/common';

export class RecordNotFound extends HttpException {
  constructor(message: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class InvalidValidation extends HttpException {
  constructor(message: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class DuplicateRecordFound extends HttpException {
  constructor(message: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class MissingRequestHeader extends HttpException {
  constructor(header: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message: `Missing request header '${header}:<token here. eg. 7x65733shsys>'`,
        header: header,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class UnAuthorizedRequest extends HttpException {
  constructor(message : string = '') {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        status: 'error',
        message: `You are not authorized to use this resource. ${message}`,
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}

export class InvalidRequestDataSent extends HttpException {
  constructor({ param, expecting }) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message: `Invalid POST request body sent for '${param}'`,
        expecting: expecting,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ServiceUnAvailable extends HttpException {
  constructor(message: string) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class InvalidFileFormat extends HttpException {
  constructor(message: string, expecting: any) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message,
        expecting,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class DatabaseConnectionFailed extends HttpException {
  constructor() {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message:
          'We lost connection with the server. Trust that you can retry in few seconds, our apologies.',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class TokenExpired extends HttpException
{
  constructor() {
    super(
      {
        statusCode: HttpStatus.UNAUTHORIZED,
        status: 'error',
        message: `You session token has expired. Please login and try again.`
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}

export class SystemError extends HttpException {
  constructor(message: string, service : string = '') {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        service,
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class InvalidPermissionError extends HttpException {
  constructor(message: string, permissions = []) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        status: 'error',
        message,
        permissions
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
