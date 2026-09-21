const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.units1}</p>
      <p>{props.part2} {props.units2}</p>
      <p>{props.part3} {props.units3}</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
}

const Footer = (props) => {
  return <p>{props.name} - {props.code} - {props.section}</p>
}

const App = () => {
  const course = 'BSIT'
  const part1 = 'CSIT340 Industry Elective'
  const units1 = 3
  const part2 = 'ES038 Technopreneurship'
  const units2 = 3
  const part3 = 'IT317 Project Management for IT'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name="Laurence Andrey M. Baraga" code="CSIT340" section="G5" />
    </div>
  )
}

export default App