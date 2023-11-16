import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateMessagingDto } from './dto/create-messaging.dto';
import { EmailHelper } from './helpers/email.helper';

@Injectable()
export class EmailMessaging {
  constructor(
    private readonly mailerService: MailerService
  ) {}

  /**
   * @member send
   * @param data 
   */
  async send(data : CreateMessagingDto)
  {
    const helper = new EmailHelper();
    const message = await helper.loadMessage(data);

    // send mail
    this.mailerService
      .sendMail({
        to: data.receiver,
        from: process.env.EMAIL_FROM,
        subject: data.subject,
        html: message,
      })
      .then((res) => {
        //console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
