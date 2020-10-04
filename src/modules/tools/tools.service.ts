import { ConfigService } from '@nestjs/config';
import { Injectable, UploadedFile } from '@nestjs/common';
import mjAPI from 'mathjax-node';
import fs from 'fs-extra';
@Injectable()
export class ToolsService {
    mjInstance: any;
    constructor(private configService: ConfigService) {
        console.log('configService custom_mode', this.configService.get('custom_mode'));
        console.log('tools mjAPI init');
        this.mjInstance = mjAPI;
        this.mjInstance.start();
        // mjAPI.config

    }
    async latex2mathml(latex: string) {
        console.time('latex2mathml');
        const data = await mjAPI.typeset({
            math: latex,
            format: "inline-TeX", // or "inline-TeX", "MathML"
            linebreaks: false,
            xmlns: 'mml',
            mml: true,      // or svg:true, or html:true
            // mmlNode: true
        });
        console.timeEnd('latex2mathml');
        return data.mml;
    }
    async handleUploadFile(@UploadedFile() file) {
        const filesPath = this.configService.get('files_path');
        const host = this.configService.get('host');
        const protocol = this.configService.get('protocol');
        const port = this.configService.get('port');
        fs.stat('')
        const writeImage = fs.createWriteStream('./' + filesPath + '/' + file.originalname);
        writeImage.write(file.buffer)
        return {
            file: protocol + '://' + host + ':' + port + '/tools/files/' + file.originalname
        };
    }

    async getFile(id) {
        return {
            id: id,
            root: this.configService.get('files_path')
        };
    }
}
