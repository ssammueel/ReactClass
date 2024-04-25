## overview
1. useeffect

## useeffect

- is a hook or a function that is called based on the life cycle of event/ component
- which are 
* mounting 
* umounting 
* updating

- each component has its own useeffect

### 1. component mounting

- whenever a component loads fot the first time

***example***

![Screenshot (434)](https://github.com/ssammueel/ReactClass/assets/124765323/ab00f557-fcd0-4906-8169-3446c904f6c6)

### 2. component updation

- whenever a component is being updated

***example***

![Screenshot (438)](https://github.com/ssammueel/ReactClass/assets/124765323/0cd0ec87-a317-4074-9e65-ba7f2f661de0)

### 3. component unmountion

- when a component is removed useeffect is called

  ***example***

  ![Screenshot (439)](https://github.com/ssammueel/ReactClass/assets/124765323/77d0fad5-9c1d-4d4d-a44d-28161488407f)


### other

### 1. dependancy array

- since useeffect is called for the first render and and rerender
- if i want to call it only when my component mounts
- Dependecy array is used []

***Example***

![Screenshot (440)](https://github.com/ssammueel/ReactClass/assets/124765323/6ae82685-5024-4c9b-89e3-6f8052ab5656)


### 2. variable in dependancy array

- when we pass variables in a dependancy array, thenever the variable change the useeffect is also called 
- and so it will be first called when the component mounts and when the variable in the dependancy array changes

***exaple***

![Screenshot (441)](https://github.com/ssammueel/ReactClass/assets/124765323/bf632e8e-2348-46ea-89e8-3de370e1bd51)

