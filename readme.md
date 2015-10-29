This repository is an example of a bug with Flow version 0.18.1.

```
$ npm install
foo@1.0.0 /tmp/bug
└─┬ react@0.14.1 
  ├─┬ envify@3.4.0
  │ ├─┬ jstransform@10.1.0
  │ │ ├── base62@0.1.1
  │ │ ├── esprima-fb@13001.1001.0-dev-harmony-fb
  │ │ └─┬ source-map@0.1.31
  │ │   └── amdefine@1.0.0
  │ └── through@2.3.8
  └─┬ fbjs@0.3.2
    ├── core-js@1.2.3
    ├─┬ loose-envify@1.1.0
    │ └── js-tokens@1.0.2
    ├─┬ promise@7.0.4
    │ └── asap@2.0.3
    ├── ua-parser-js@0.7.9
    └── whatwg-fetch@0.9.0

npm WARN EPACKAGEJSON foo@1.0.0 No description
npm WARN EPACKAGEJSON foo@1.0.0 No repository field.
$ flow
Flow server launched for /tmp/bug

Spawned flow server (child pid=4053)
Logs will go to /private/tmp/flow/zStmpzSbug.log
No errors!
$ flow check-contents helium.js < helium.js
helium.js:8
  8: 	renderer: class Foo extends React.Component { render() {return <div />;}}
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ class expr `Foo`. This type is incompatible with
  7:   renderer: Class<React.Component>;
                       ^^^^^^^^^^^^^^^ Component. See: index.js:7


Found 1 error
```
