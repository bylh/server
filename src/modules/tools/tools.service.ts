import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import mjAPI from 'mathjax-node';
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
}
