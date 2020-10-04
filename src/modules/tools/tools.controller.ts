import { ToolsService } from './tools.service';
import { Controller, Post, Body, Res, UploadedFile, UseInterceptors, Get, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('tools')
export class ToolsController {
    private toolsServ: ToolsService;
    constructor(toolsServ: ToolsService) {
        this.toolsServ = toolsServ;
    }

    @Post('latex2mathml')
    async latex2mathml(@Body() body, @Res() res) {
        console.log(body);
        try {
            const mathml = await this.toolsServ.latex2mathml(body.latex);
            res.status(200).send({
                result: {
                    text: mathml
                },
                status: 'ok'
            })
        } catch(err) {
            res.status(200).send({
                result: {
                    text: ''
                },
                status: 'error'
            });
        }
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file')) // file对应HTML表单的name属性
    async uploadFile(@UploadedFile() file) {
        // const writeImage= createWriteStream('./test.jpg');
        // writeImage.write(file.buffer)
       return this.toolsServ.handleUploadFile(file);
    }
    
    @Get('files/:fileId')
    async getFile(@Param('fileId') fileId, @Res() res) {
        //   const imgPath = getImgPath(imgId);
        const file = await this.toolsServ.getFile(fileId) as any;
        return res.sendFile(file.id, { root:  file.root});
    }
}
