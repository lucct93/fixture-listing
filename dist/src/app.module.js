"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("./common/config");
const helper_1 = require("./common/helpers/helper");
const tournament_module_1 = require("./modules/tournament/tournament.module");
const team_module_1 = require("./modules/team/team.module");
const fixture_module_1 = require("./modules/fixture/fixture.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const user_middleware_1 = require("./middlewares/user.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
        consumer.apply(user_middleware_1.UserMiddleware).forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_2.Module)({
        imports: [
            config_1.ConfigModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../..', '/upload/photo'),
                serveRoot: `/upload/photo`,
            }),
            typeorm_1.TypeOrmModule.forRoot((0, helper_1.createTypeOrmOptions)('typeorm')),
            tournament_module_1.TournamentModule,
            team_module_1.TeamModule,
            fixture_module_1.FixtureModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map