import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nestjs"),
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
      exclude: ["/*"],
    }),
  ],
})
export class AppModule {}
