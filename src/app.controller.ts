import { Controller, Get } from '@nestjs/common';
import { Success } from 'responses/general.response';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return Success("You've reached the NIRSAL Farmer portal default page. Noting for you to see here.", {
      // documentation_url : "https://documenter.getpostman.com/view/10249872/VUqssGsS",
      developer : "DTH Africa <www.dthafrica.com>"
    });
  }
}
