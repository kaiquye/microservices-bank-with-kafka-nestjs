### 🍀 microservices bank with kafka nestjs

## Sobre
Projeto desenvolvido para estudos. 
Neste projeto eu desenvolvo um sistema baseado na arquitetura de microservices utilizando kafka e nestsjs, com banco de dados ( não compartilhado ) MYSQL. 


## Arquitetura 
Existe 4 micro-serviços trabalhando em conjunto : Autenticação, Proprietario, Conta, Endereço.

## ⚙ Serviços  

- 🎈 **Aplicação principal**
  - 👤 **Owner** : Esse serviço é responsável por gerenciador todas as rotas e mensagens do mesmo.
  - 👮🏼‍♀️ **auth** : Esse serviço é reponsável pela autenticação de todos os usuarios...

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
  -  **service-account** : Este módulo é responsável por fazer transferências, ValidarTransferências, DesativarConta, validarSaldo...
  -  Esse serviço so se comunica por meio de mensageria.
#### 🎲 database 
Existe um banco de dados separado para estes serviço, `microservice-service-account`. 
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
Caso o endereço não seja valido, ele salva em uma tabela diferente, informando sobre a inconsistencia dos dados.
-  Esse serviço so se comunica por meio de mensageria.
#### 🎲 database 
Existe um banco de dados separado para estes serviço, `microservice-service-address`. 
```json

 "OWNER": {
    "id" :      "Int"     
    "fist_name" :"String"
    "phone" :"BigInt" 
    "email": "String"
    "active" :"Boolean" 
}

 "ADDRESS": {
   "id"  :     "Int"     
   "cep": String
   "logradouro": "String"
   "complemento" :"String"
   "bairro": "String"
   "localidade": "String
   "uf": "String"
   "gia": "String"
   "ddd": "String"
   "ownerId": "Int"
}

 "ADDRESS_TEMPORARY": {
  "id": "int"       
  "status": "String"
  "ownerId": "Int"
}

```

microservices system with kafka and nestjs. Responsible system for managing accounts and transactions
