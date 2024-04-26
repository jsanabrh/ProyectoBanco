import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import dbConfig from './db-config';
import { ConfigService, ConfigType } from '@nestjs/config';

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: (configService: ConfigType<typeof dbConfig>) => {
                const {db, env} = configService;
                console.log(configService);
                
                const uriDb = 
                env === 'local'
                ? `${db.connection}${db.host}${db.name}`
                : `mongodb+srv://${db.user}:${db.password}@cluster0.mongodb.net/
                ${db.name}?retryWrite=true&w=majority`;
                return{
                    uri:uriDb
                };
            },
            inject: [dbConfig.KEY],
        }),
       
    ],
    controllers: [],
    providers: [],
})
export class PersistanceModule {}
