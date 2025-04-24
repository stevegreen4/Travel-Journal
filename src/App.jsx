import Header from "./Components/Header"
import Entry from "./Components/Entry"
import travelData from "./data"

export default function App() {
  const entryElements = travelData.map((data) => {
    return <Entry
              key = {data.id} 
              data = {data}
          />
  })

    return(
        <>
            <Header />
            {entryElements}
        </>
    )
    
}