# Getting Started with Drizzle ORM

### create next app

``` bash
npm create-next-app myApp
```

### Setup Drizzle ORM
``` bash
npm i drizzle-orm @neondatabase/serverless
```

### Install Drizzle Kit
``` bash
npm i -D drizzle-kit
```

### Create Database file as follow db.js/ts
``` javascript

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
const sql = neon(process.env.NEXT_PUBLIC_DRIZZEL_DB_URL);
export const db = drizzle(sql,{schema});

```

- **Next Step is to Create Database on Neon Database**
- **After Creating database copy connection string of database and put it on .env file and name it as above mention in const sql = neon()**
- **After doing all this stuff set-up drizzle-kit**

### Install Drizzle Kit
``` Javascript

import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.js", //here we need to give accurate path where our schema file is store
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "",
  }
});
```

### Now all set Push the chnages to Databae and run the studio
- now rest of the CRUD operation you can find in this repository **/home**

