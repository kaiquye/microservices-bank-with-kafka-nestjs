### 🍀 microservices bank with kafka nestjs


## ⚙ Services 

- **main-aplication**
- **service-account**
- **service-address**



- 🎈 **Aplicação principal**
  - 👤 **Owner** : Este serviço é responsável por gerenciador todas as rotas e mensagens do mesmo.
  - 👮🏼‍♀️ **auth** : Esse módulo é reponsável pela autenticação de todos os usuarios...

#### 🎲 database 
Existe um banco de dados separado para estes serviços, `microservice-main-application`, nele fica todas as informações necessaria para a aplicação 
principal funcionar.
```json
{
   "OWNER" {
    "id": "number"
    "fist_name": "String"
    "last_name": "String"
    "phone": "BigInt"
    "password": "String"
    "email": "String"
    "active": "Boolean"
   
   }
}
```


- 💸 **Serviço de conta** 
  -  **service-account** : Este módulo é responsável por fazer transferencias, ValidarTrasnferencias, DesativarConta, validarSaldo...
#### 🎲 database 
Existe um banco de dados separado para estes serviços,`microservice-service-account`, nele fica todas as informações necessaria para o micro serviço de conta funcionar ( validação de usuario, auteticação e envios de mensagens )
```json
 "OWNER" {
    "id": "Int"    
    "fist_name": "String"
    "phone": "BigInt "
    "email": "String "
    "active": "Boolean "
}

 "ACCOUNT" {
   "id" :      "Int"     
   "bar_code": "String"
   "model": "String"
   "balance": "BigInt"
   "status": "String" 
   "ownerId": "Int"
}

 "ACCOUNT_INACTIVE" {
        "id": "number"
        "bar_code": "String"
        "model": "String"
        "balance": "BigInt"
        "status": "String" 
        "ownerId": "Int"
}

 "HIST_TRANSFERS" {
   "id": "number"  
   "value": "BigInt"
   "date_transfer_request": "DateTime" 
   "date_transfer_accepted": "DateTime" 
   "bar_code_to_transfer": "String"
   "bar_code_owner": "String"
   "accepted": "Boolean" 
   "ownerId": "Int"
}
```
- 🏠 Serviço de endereço 
- **service-address** : Este serviço é responsável por buscar informações sobre o endereço em uma API publica, cadastra esse endereço no banco.
caso o endereço não seja valido, ele salva em uma tabela diferente, informando sobre a inconsistencia dos dados.


```json

model OWNER {
    id       Int       @id @default(autoincrement())
    fist_name String
    phone BigInt @unique
    email String @unique
    active Boolean @default(true)
    createAt DateTime @default(now())
    address ADDRESS[]
    address_temporary ADDRESS_TEMPORARY[]
}

model ADDRESS {
   id       Int       @id @default(autoincrement())
   cep String
   logradouro String
   complemento String
   bairro String
   localidade String
   uf String
   gia String
   ddd String
   owner OWNER  @relation(fields: [ownerId], references: [id])
   ownerId Int
}

model ADDRESS_TEMPORARY {
  id       Int       @id @default(autoincrement())
  status String
  owner OWNER  @relation(fields: [ownerId], references: [id])
  ownerId Int
}

```

microservices system with kafka and nestjs. Responsible system for managing accounts and transactions
