import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose'

async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-near')
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('near API')
    .setDescription('邻居购物')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  //设置跨域访问
  // app.all("*",function(req,res,next){
  //   //设置允许跨域的域名，*代表允许任意域名跨域
  //   res.header("Access-Control-Allow-Origin","*");
  //   //允许的header类型
  //   res.header("Access-Control-Allow-Headers","content-type");
  //   //跨域允许的请求方式 
  //   res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  //   if (req.method.toLowerCase() == 'options')
  //       res.send(200);  //让options尝试请求快速结束
  //   else
  //       next();
  // })
  app.enableCors();

  await app.listen(6416);
}
bootstrap();
