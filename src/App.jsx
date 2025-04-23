import Header from "./Components/Header"
import Entry from "./Components/Entry"
import travelData from "./data"

export default function App() {
  const entryElements = travelData.map((data) => {
    return <Entry 
              title = {data.title}
              img = {{src: data.img.src, alt: data.img.alt}}
              country = {data.country}
              googleMapsLink = {data.googleMapsLink}
              dates = {data.dates}
              text = {data.text}
          />
  })

    return(
        <>
            <Header />
            {entryElements}
        </>
    )
    
}