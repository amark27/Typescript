//tell Typescript that there is cold elsewhere that declares a certain variable
//that you are using in a file

//usually this will be within a global.d.ts file so all files globally have access to it
declare var process: any;

//then you're allowed to use it like process.exit() without Typescript complaining

//recommend using interfaces so the object can be modified
interface Process {
    exit(code?: number): void;
}
declare var process: Process;