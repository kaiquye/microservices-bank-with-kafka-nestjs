# microservices bank with kafka nestjs

##### Services 
- 🎈 **Aplicação principal**
  - 👤 **Owner** : Esse modulo ( **serviço** ) fica na aplicação principal é trabalha junto com o modulo de autenticação. 
  - 👮🏼‍♀️ **auth** : Esse modulo é reponsavel pela autenticação de todos os usuarios. 
##### database 
```json
model USER {
    id       Int       @id @default(autoincrement())
    fist_name String
    last_name String
    phone BigInt @unique
    password String @unique
    email String @unique
    active Boolean @default(true)
    createAt DateTime @default(now())
}
```
 

microservices system with kafka and nestjs. Responsible system for managing accounts and transactions
