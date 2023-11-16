import { HttpStatus } from '@nestjs/common';

export function Success(message: string, other: any = {}) {
  return Object.assign(
    {
      status: 'success',
      message: message,
      statusCode: HttpStatus.OK,
    },
    other,
  );
}

export function Failed(message: string, other: any = {}) {
  return Object.assign(
    {
      status: 'error',
      message: message,
      statusCode: HttpStatus.NOT_FOUND,
    },
    other,
  );
}

export function CannotCreate()
{
  return {
    status: 'error',
    message: `Your access mode doesn't permit you to create any record on this resource.`,
    statusCode: HttpStatus.NOT_ACCEPTABLE,
  };
}

export function CannotRead()
{
  return {
    status: 'error',
    message: `Your access mode doesn't permit you to read any record on this resource.`,
    statusCode: HttpStatus.NOT_ACCEPTABLE,
  };
}

export function CannotDelete()
{
  return {
    status: 'error',
    message: `Your access mode doesn't permit you to delete any record on this resource.`,
    statusCode: HttpStatus.NOT_ACCEPTABLE,
  };
}

export function CannotUpdate()
{
  return {
    status: 'error',
    message: `Your access mode doesn't permit you to update any record on this resource.`,
    statusCode: HttpStatus.NOT_ACCEPTABLE,
  };
}
