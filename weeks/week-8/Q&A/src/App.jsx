import './App.css'
import { AnotherSection } from './components/AnotherSection'
import { Description } from './components/Description'
import { TopSection } from './components/TopSection'

//Implicit return
//Named export
export const App = () => (
  <>
    {/* <h1>App</h1>
    <Description text="Matilda Brunemalm's portfolio" className="pink" /> */}
    <TopSection />
    <AnotherSection />
  </>
)

//Explicit return
//Default export
//const App = () => {
//   return (
//     <>
//       {/* <h1>App</h1>
//       <Description text="Matilda Brunemalm's portfolio" className="pink" /> */}
//       <TopSection />
//       <AnotherSection />
//     </>
//   )
// }

//export default App
