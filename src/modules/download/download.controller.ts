import { DownloadService } from './download.service';
import { Controller, Post, Body, Res } from '@nestjs/common';

@Controller('download')
export class DownloadController {
    private downloadServ: DownloadService;
    constructor(downloadServ: DownloadService) {
        this.downloadServ = downloadServ;
    }

    @Post('html2word')
    async html2word(@Body() body, @Res() res) {
        console.log(body);
        const docx = await this.downloadServ.getFile();
        res.status(200).send(docx)
    }
}
