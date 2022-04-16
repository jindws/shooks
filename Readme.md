## SHooks
- yarn add shooks -S
- import { useDebounce } from 'shooks'

### useSize
- 基于ResizeObserver
- 初始化参数
  - ref/Element
- @return
  - [width,height]
```typescript
const ref = useRef()
const [width,height] = useSize(ref)//正常的ref

const refNull = useRef()
const [wNull] = useSize(refNull)//空ref 返回0

const [wApp] = useSize(document.getElementById('app'))// document
const [nullApp] = useSize(document.getElementById('app1'))// 不存在的DOM 返回0

return <>
    <div ref={ref}>{width}</div>
    <div>{wNull}</div>
    <div>{wApp}</div>
    <div>{nullApp}</div>
</>
```
### useTitle
- 修改title
```typescript
useTitle('shooks')
```

### useDebounceValue 值防抖
- 数值改变后nms后响应
- 初始化参数
  - 初始化的值
  - timeout:number,防抖数值 默认1000ms
- @return
  - value:最新的值

```typescript
  const [num,setNum] = useState(1)
  const value = useDebounceValue(num)

  function add(){
      setNum(num+1)
  }
  return <>
      <div onClick={add}>{num}</div>
      <div>{value}</div>
  </>
```
### useThrottleValue 值节流
> useDebounceValue,获得节流效果
### useDebounce 防抖
- 初始化参数
  - 初始化的值
  - timeout:number,防抖数值 默认1000ms
- @return
  - value:最新的值
    - fn:设置最新的结果
      - fn(value)
```typescript
  const [num,setNum] = useDebounce(1)
  const [age,setAge] = useDebounce(1,10)
  function add(){
      setNum(num+1)
      setAge(age+1)
  }
  return <>
      <div onClick={add}>{num}</div>
      <div>{age}</div>
  </>
```
### useThrottle 节流
> 用法同useDebounce,获得节流效果

### useLocalStorage
- 参数
  - key:string 必填 
  - options 选填
    - defaultValue:初始值 选填
    - force:boolean;覆盖老数据,如果没有defaultValue,则设置local为'''
```typescript
const [data,{set,reset}] = useLocalStorage('store',{
    defaultValue:{
        age:10,
    },
    force:true
})
const [name,upName] = useLocalStorage('reset',{
    force:true
})

function add(){
    set({
        age:data.age+1
    })
    upName.set('reset')
}


return <>
    <div onClick={add}>{data.age}</div>
    <div onClick={reset}>{name}</div>
    </>
```
### useSessionStorage
> 同 `useLocalStorage`

### useMap
```
import { useMap } from 'shooks'

const [value, { set, remove, clear, reset, has, size }] = useMap([
    ["a", "b"],
]);
```
### useSet
```
import { useSet } from 'shooks'

const [value, { set, remove, clear, reset, has, size }] = useSet(1);
```

### useBoolean
- defaultValue:false
- toggle:切换
- setTrue:设为true
- setFalse:设为false
```typescript
const [data, {toggle,setTrue,setFalse}] = useBoolean(true)
```