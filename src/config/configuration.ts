// export default () => ({
//     custom_mode: 'custom_prod',
//     mode: process.env.MODE,
//     go_api_host: process.env.GO_API_HOST,
//     go_api_port: process.env.GO_API_PORT,
//     go_api_protocol: process.env.GO_API_PROTOCOL
//   });


import developmentConfig from './development';
import localConfig from './local';
import productionConfig from './production';

const configs = {
    development: developmentConfig,
    local: localConfig,
    production: productionConfig,
};
const env = process.env.NODE_ENV || 'production';

export default configs[env];