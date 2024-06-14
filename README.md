# engine-gjt-gts-bug

The showcases a problem we have when using gjs/gts in engines.

The problem happens when we import a component from a `gjs/gts` file inside of an engine.
The component can come from a v1 or v2 addon, if that component uses a class based helper it will error

In our case we have `test-app` which mount `engine-foo` which imports a `foofoobar` component from `random-v2-addon`, the `foofoobar` component uses an `or` helper which is a class based helper.


## Reproduction

```
cd test-app
npm run start
```

After the test-app is served click the show engine button, it will work the first time,
but if you close the engine, and open it again it will fail with the following error

```
Uncaught (in promise) Error: Cannot create new instances after the owner has been destroyed (you attempted to create helper:or)
    at InternalFactoryManager.create (index.js:355:1)
    at Proxy.create (index.js:204:1)
    at ClassicHelperManager.createHelper (index.js:2518:1)
    at manager.js:245:1
    at Object.evaluate (runtime.js:3097:1)
    at AppendOpcodes.evaluate (runtime.js:1037:1)
    at LowLevelVM.evaluateSyscall (runtime.js:4851:1)
    at LowLevelVM.evaluateInner (runtime.js:4829:1)
    at LowLevelVM.evaluateOuter (runtime.js:4822:1)
    at VM.next (runtime.js:5659:1)
```

