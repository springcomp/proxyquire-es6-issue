# proxyquire-es6-issue
Minimal repro case for proxyquire issue with ES6 modules

## case

Run the following commands:

```sh
npm install && npm test
```

> added 175 packages, and audited 176 packages in 2s
> 
> 45 packages are looking for funding
>   run `npm fund` for details
> 
> found 0 vulnerabilities
> 
> > p@1.0.0 test
> > mocha test/**/*spec.js
> 
> 
> 
>   MigrationRepository
>     1) "before each" hook for "returns database name"
> 
> 
>   0 passing (5ms)
>   1 failing
> 
>   1) MigrationRepository
>        "before each" hook for "returns database name":
>      TypeError: Cannot read properties of undefined (reading 'require')
>       at Proxyquire.load (node_modules\proxyquire\lib\proxyquire.js:129:72)
>       at Context.<anonymous> (file:///C:/Projects/springcomp/yo/p/test/migration_repository.spec.js:7:11)
>       at process.processImmediate (node:internal/timers:476:21)
