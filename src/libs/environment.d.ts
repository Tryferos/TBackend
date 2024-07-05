import { Interface } from "readline";

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            NODE_ENV: 'development' | 'production'
            PORT: number;
            API_VERSION: string;
            MONGO_URL: string;
        }
    }
}

export {}