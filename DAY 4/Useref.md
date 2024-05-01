## useref
-preveously i saw that there are 
* **state variables** - Value persists but causes rerender
* **normal variables** - value does not persist and does not couse reerende

now in this casa i want to use a variable that doesn't couse rerender but value persists
UseRef are used in this case

         var name = useref("samuel)

-here the variable does not hold the value directly

-it is created as a object with current

          {current : "samuel"}

-incase i want a variable that can be changed and the changes are to remain and it should couse no rerender then useref are the best to use

### DOM MANIPULATION
-they can also be used in dom manipulation
