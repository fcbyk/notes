---
layout: doc
outline: [2,3]
---

### 另一种链式调用

::: code-group

```javascript [src]
class Count{
    #sum

    constructor(init) {
        this.sum = init
    }

    add(num) {
        this.sun += num
        let self = this
        let addWrapper = function (nextNum) {
            return self.add(nextNum)
        };
        return addWrapper
    }

    getSum() {
        return this.sum
    }
}
```

```javascript [test]
let count = new Count(10)

count.add(1)(4)(23)(24)(66)(434)(33)(34)

console.log(count.getSum())
```

:::