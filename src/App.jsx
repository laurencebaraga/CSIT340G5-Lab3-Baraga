const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
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
  const part1 = { name: 'CSIT340 Industry Elective', units: 3 }
  const part2 = { name: 'ES038 Technopreneurship', units: 3 }
  const part3 = { name: 'IT317 Project Management for IT', units: 3 }

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