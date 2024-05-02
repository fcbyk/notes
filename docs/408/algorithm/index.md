---
layout: doc
outline: [2,3]
---

### 二分法

二分法是一种常见的搜索算法，通常用于在有序数组或列表中查找特定元素的位置。  
时间复杂度为O(log n)，其中n是元素数量


::: code-group

```text[伪代码]
函数 binary_search(数组 arr, 目标值 target) -> 整数
    左边界 left 设为 0
    右边界 right 设为 数组长度 - 1
    
    当 左边界 <= 右边界 时执行：
        中间位置 mid 设为 (左边界 + 右边界) / 2
        
        如果 数组[mid] == target，则返回 mid
        否则如果 数组[mid] < target，则 左边界 设为 mid + 1
        否则 右边界 设为 mid - 1
    
    返回 -1  // 没有找到目标值
```

```c++[C++]
int binary_search(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)  return mid; // 找到目标值，返回索引
        else if (arr[mid] < target)  left = mid + 1; // 目标值在右半部分，更新左边界
        else right = mid - 1; // 目标值在左半部分，更新右边界
    }

    return -1; // 没有找到目标值
}
```

:::