/*

1. Setup a Node.js project package.json. Quick one : npm init -y
2. Add TypeScript (npm install typescript --save-dev)
3. Add node.d.ts (npm install @types/node --save-dev)
4. Init a tsconfig.json for TypeScript options with a few key options in your tsconfig.json 
(npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs)

Can make it live compile by 
1. Add ts-node which we will use for live compile + run in node (npm install ts-node --save-dev)
2. Add nodemon which will invoke ts-node whenever a 

Then add scripts target below to package.json

Now can run npm start and it will automatically recompile and re-run ts code
*/
"scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
}