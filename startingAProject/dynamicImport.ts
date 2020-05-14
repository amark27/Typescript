//can dynamically import expressions using import()

import(/* webpackChunkName: "momentjs" */ "moment")
  .then((moment) => {
      // lazyModule has all of the proper types, autocomplete works,
      // type checking works, code references work \o/
      const time = moment().format();
      console.log("TypeScript >= 2.4.0 Dynamic Import Expression:");
      console.log(time);
  })
  .catch((err) => {
      console.log("Failed to load moment", err);
  });

//tsconfig file
{
    "compilerOptions": {
        "target": "es5",                          
        "module": "esnext",                     
        "lib": [
            "dom",
            "es5",
            "scripthost",
            "es2015.promise"
        ],                                        
        "jsx": "react",                           
        "declaration": false,                     
        "sourceMap": true,                        
        "outDir": "./dist/js",                    
        "strict": true,                           
        "moduleResolution": "node",               
        "typeRoots": [
            "./node_modules/@types"
        ],                                        
        "types": [
            "node",
            "react",
            "react-dom"
        ]                                       
    }
}