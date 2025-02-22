
import './App.css'

function App() {
  let cardInfo ={
    image:"https://tse4.mm.bing.net/th?id=OIP.eU8MYLNMRBadK-YgTT6FJQHaHw&pid=Api&P=0&h=220",
    firstName:"elene",
    lastName:"gelashvili"
  }

  return (
    <>
      <div className="card">
<img src={cardInfo.image} alt="" />
<h1>{cardInfo.firstName}</h1>
<h4>{cardInfo.lastName}</h4>
      </div>
    </>
  )
}

export default App
