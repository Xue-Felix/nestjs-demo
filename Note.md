# Nest.js项目学习笔记

## cli创建
```bash
nest new nest-demo
```

## 初始化文件结构：
```bash
src
 ├── app.controller.spec.ts
 ├── app.controller.ts
 ├── app.module.ts
 ├── app.service.ts
 └── main.ts
```

| 文件  |  作用 |
|---|---|
| app.controller.spec.ts   |  带有单个路由的基本控制器 |
| app.controller.ts   |  对于基本控制器的单元测试样例  |
| app.module.ts   | 应用程序的根模块  |
| app.service.ts   | 带有单个方法的基本服务  |
| main.ts   | 应用程序入口文件。它使用NestFactory 用来创建Nest应用实例  |

```ts
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```
要创建一个Nest应用实例，我们使用了`NestFactory`核心类。`NestFactory`暴露了一些静态方法用于创建应用实例。`create()`方法返回一个实现`INestApplication`接口的对象。该对象提供了一组可用的方法。在`main.js`实例中，启动了`HTTP服务`，让应用程序等待`HTTP`请求。


## 控制器 Controller
控制器负责处理传入的`请求`和向客户端返回`响应`

## 提供者 Provider

## 模块 Module

## 中间件 Middleware



