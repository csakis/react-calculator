import Calculator from "./components/Calculator"
import Display from "./components/Display"
import Result from "./components/Result"

function App() {

  return (
    <div className="container mt-3">
      <h2 className="text-center">Calculator</h2>
      <div className="col-sm-6 offset-sm-3">
      <Display />
      <Result />
      <Calculator />
</div>
    </div>
  )
}

export default App
