# Storage
localStorage with max-age  封装了localStorage，使之像redis那样拥有过期时间

#### install
`npm i storage-exp -S`

#### method
```
import Storage from 'Storage.js';

async function test() {
  await Storage.set({
    key: 'demo',
    value: {a:'haha'},
    age: 60 // seconds, default is forever, 0 is immediately delete,
  });
  
  const data = await Storage.get('demo');
}
```
