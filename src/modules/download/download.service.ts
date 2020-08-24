import { Injectable } from '@nestjs/common';
import fs from 'fs-extra';
import path from 'path';
@Injectable()
export class DownloadService {
    async getFile() {
        const testFilePath = path.resolve(__dirname, './', 'test.docx');
        const docx = await fs.readFile(testFilePath);
        return docx;
    }
}
