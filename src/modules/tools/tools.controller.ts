import { ToolsService } from './tools.service';
import { Controller, Post, Body, Res } from '@nestjs/common';

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
}
