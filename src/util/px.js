
let arr1=[10,6,47,45,8,23,45,48,78,344,90,222,1,32,65,56,53,242,56,78,2342,1,231,131]
let arr2=[10,6,47,45,8,23,45,48,78,344,90,222,1,32,65,56,53,242,56,78,2342,1,231,131]
let arr3=[10,6,47,45,8,23,45,48,78,344,90,222,1,32,65,56,53,242,56,78,2342,1,231,131]
let arr4=[10,6,47,45,8,23,45,48,78,344,90,222,1,32,65,56,53,242,56,78,2342,1,231,131]
let arr5=[10,6,47,45,8,23,45,48,78,344,90,222,1,32,65,56,53,242,56,78,2342,1,231,131]
let time=0
// 冒泡排序
function mp(arr){
    time=0
    let result=[]
    for(let i=0;i<arr.length;i++){
        for(let k=0;k<arr.length-i;k++){
            time+=1;
            if(arr[arr.length-1-i]<arr[k]){
                let min_num=arr[arr.length-1-i]
                arr[arr.length-1-i]=arr[k]
                arr[k]=min_num
            }
        }
    }
    return arr
}
// 选择排序
function xz(arr){
    time=0
    for(let i=0;i<arr.length;i++){
        for(let k=i;k<arr.length;k++){
            time++
            let min=0;
            if(arr[i]>arr[k+1]){
                min=arr[k+1]
                arr[k+1]=arr[i]
                arr[i]=min
            }
        }
    }
    return arr
}
function cr(arr){
    time=0
    for(let i=1;i<arr.length;i++){
        preIndex = i - 1;
        current = arr[i];
        // console.log(time)
        while(preIndex >= 0 && arr[preIndex] > current) {
            time++
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr
}
function insertionSort(arr) {
    time=0
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        // console.log(time)
        
        while(preIndex >= 0 && arr[preIndex] > current) {
            time++
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
function quickSort(arr, left, right) {
    
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        time++
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition2(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort2(arr, low, high) {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}
// console.log()
// console.log(mp(arr1))
// console.log("冒泡排序执行的次数:"+time)
// console.log(xz(arr2))
// console.log("选择排序执行的次数"+time)
// console.log(cr(arr3))
// console.log("插入排序的执行次数"+time)
// console.log(insertionSort(arr4))
// console.log("插入排序的执行次数"+time)
// time=0
// console.log(quickSort(arr5))
// console.log("快速排序的执行次数"+time)

let arr=["A","B","C"]
let obj={
    B:["B",2,3],
    A:[11,"A",3],
    C:["C",22,31]
}
let newobj={}
for(let i=0;i<arr.length;i++){
    newobj[arr[i]]=obj[arr[i]]
}
console.log(newobj)
console.log(Object.keys(obj).sort())