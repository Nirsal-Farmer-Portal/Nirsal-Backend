import { Controller, Get, Param } from '@nestjs/common';
import { InputsService } from '../services/inputs.service';
import { Success } from 'responses/general.response';
import { RecordSummaryQueryDto } from '../dtos/record-summary.dto';

@Controller('inputs')
export class InputsController {
  constructor(private readonly inputService: InputsService) {}

  @Get('/record/summary/:type/:category')
  async getRecordSummary(@Param() param: RecordSummaryQueryDto) {
    const data = await this.inputService.getRecordSummary(param);
    return Success('Showing record summary', { data });
  }
}
