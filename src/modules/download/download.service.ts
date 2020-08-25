import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import fs from 'fs-extra';
import path from 'path';
@Injectable()
export class DownloadService {
    constructor(private configService: ConfigService) {
        console.log('process.env mode', process.env.NODE_ENV);
        console.log('configService custom_mode', this.configService.get('custom_mode'));

    }
    async getFile() {
        // console.log('哈哈哈1', this.configService.get('go_api_host'));
        const testFilePath = path.resolve(__dirname, './', 'test.docx');
        const docx = await fs.readFile(testFilePath);
        return docx;
    }
}
