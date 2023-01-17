"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./common/config");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
const http_exception_filter_1 = require("./filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: '*',
            allowedHeaders: '*',
        },
    });
    const envConfig = app.get(config_1.CONFIG);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        validationError: {
            target: false,
            value: false,
        },
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.setGlobalPrefix(envConfig.get('service.baseUrl'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/health', (req, res) => {
        res.json({ ready: true });
    });
    await initializeSwagger(app, envConfig);
    await app.listen(envConfig.get('server.port'), () => {
        console.log(`App started at: http://localhost:${envConfig.get('server.port')}`);
        console.log(`Swagger server at: http://localhost:${envConfig.get('server.port')}/${envConfig.get('service.docsBaseUrl')}`);
    });
}
function initializeSwagger(app, envConfig) {
    const serviceName = envConfig.get('service.name');
    const serviceDescription = envConfig.get('service.description');
    const apiVersion = envConfig.get('service.apiVersion');
    const config = new swagger_1.DocumentBuilder()
        .setTitle(`${serviceName} API spec`)
        .setDescription(serviceDescription)
        .setVersion(apiVersion)
        .addServer(`${envConfig.get('server.swaggerSchema')}://${envConfig.get('server.hostname')}`)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(envConfig.get('service.docsBaseUrl'), app, document);
}
bootstrap();
//# sourceMappingURL=main.js.map