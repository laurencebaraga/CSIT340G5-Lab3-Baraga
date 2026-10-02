const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const total = props.parts[0].units + props.parts[1].units + props.parts[2].units
  return <p>Total units: {total}</p>
}

const Footer = (props) => {
  return <p>{props.name} - {props.code} - {props.section}</p>
}

const App = () => {
  const course = {
    name: 'BSIT',
    parts: [
  { name: 'CSIT340 Industry Elective', units: 3 },
  { name: 'ES038 Technopreneurship', units: 3 },
  { name: 'IT317 Project Management for IT', units: 3 }
]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name="Laurence Andrey M. Baraga" code="CSIT340" section="G5" />
    </div>
  )
}

export default App