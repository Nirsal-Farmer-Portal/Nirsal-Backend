import { Injectable } from '@nestjs/common';
import fs = require('fs');
import path = require('path');
import { SystemError } from 'exceptions/custom.exceptions';
import { CreateMessagingDto } from '../dto/create-messaging.dto';

export class EmailHelper {

    /**
     * @member loadMessage
     * @param data 
     */
    async loadMessage(data : CreateMessagingDto)
    {
        if (data?.message) return data.message;

        // check for template
        if (data?.template)
        {
            const filePath = path.join(process.cwd(), './src/common/messaging/templates/' + data.template.name + '.html');

            try
            {
                let text = fs.readFileSync(filePath, 'utf8');

                // check for replace
                if (data.template?.replace)
                {
                    for (let key in data.template.replace) text = text.replace(`{${key}}`, data.template.replace[key]);
                }

                return text;
            }
            catch(e)
            {
                console.error(`Message template ${data.template.name} does not exists.`);
            }
            
        }

        // empty
        return '';
    }
}
