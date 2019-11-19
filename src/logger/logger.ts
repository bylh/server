import {Logger} from '@nestjs/common';

export class MyLogger extends Logger {
    debug(message: string, context?: string) {
        // add your tailored logic here
        console.log('这是我继承后修改的debug逻辑');
        super.debug(message, context);
    }
    static debug(message: any, context?: string, isTimeDiffEnabled?: boolean): void {
        console.log('static debug');
        super.debug(message, context);
    }
}
