using props to pass data  --- this method is not suitable for big size of data instead a user context is made

<<<<<<<app component>>>>>>>
function App() {

  let [userName, setUserName] = useState("samuel")

  return (
    <>
      <h1>app component {userName}</h1>
      <Pproduct userName={userName}/> using props to pass username across
    </>
  )
}

<<<<<<<<<<<product>>>>>>>>>>>
function Pproduct(props)
{
  return (
    <div className="product">
        <h1>product component{props.userName}</h1>
        <Childprod userName = {props.userName}/>
        
     </div>  
  )
}
\<<<<<<child prod>>>>>>
const Childprod = (props) => {
  return (
    <div className='child'>
      Childproduct {props.userName}
      </div>
  )
}


===> in context creation we make the data we want to be used across as a flobal data and anycomponent can pick it from the  contenct without using props

==> to  create the contect we hav to import "createcontext"
==> and to use the data inonother component we have to import "usecontext" from react