````json
model OWNER {
id       Int       @id @default(autoincrement())
fist_name String
phone BigInt @unique
email String @unique
active Boolean @default(true)
createAt DateTime @default(now())
account ACCOUNT[]
history_of_transfers HIST_TRANSFERS[]
}
````

````json
model ACCOUNT {
id       Int       @id @default(autoincrement())
bar_code String @unique
model String
balance BigInt @default(0)
owner OWNER  @relation(fields: [ownerId], references: [id])
ownerId Int
}
````

````json
model HIST_TRANSFERS {
id       Int       @id @default(autoincrement())
value BigInt
date_transfer_request DateTime @default(now())
date_transfer_accepted DateTime @default(now())
bar_code_to_transfer String
bar_code_owner String
accepted Boolean @default(false)
owner OWNER  @relation(fields: [ownerId], references: [id])
ownerId Int
}
````