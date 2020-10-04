export default () => ({
    custom_mode: 'custom_local',
    mode: process.env.MODE,
    host: '127.0.0.1',
    protocol: 'http',
    port: '3001',
    go_api_host: '127.0.0.1',
    go_api_port: 8001,
    go_api_protocol: 'http',
    public_path: 'public',
    files_path: 'public/files'
  });