# @sg-types

Пакет с запросами к API Skill Labs

## Установка
Чтобы установить пакет в свой проект, нужно добавить запись в объект `dependencies` в файле package.json: 

> ```"@sk-requests": "git+https://anatoly_skill_guilds:glpat-LFGzwQF_v3gL42vU6nf5@gitlab.com/skillguilds_repo/requests.git#main"```

# Использование
Все сервисы лежат в корневом файле пакета, которые моно достать через деструктуризацию

 ```
 import { ProfileService } from "@sk-requests"
 
 const profileService = new ProfileService(ctx)

```
