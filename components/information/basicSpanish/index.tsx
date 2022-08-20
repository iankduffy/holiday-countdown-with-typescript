
interface Props {

}

const spanishToEnglish = [
  {
    spanish: 'Hola', 
    english: 'Hello'
  }
]

const BasicSpanish = ({}: Props) : JSX.Element => {

  return (
    <div className={''}>
      <h2 className="sm:text-4xl text-2xl font-bold my-4">Basic Spanish</h2>
      {spanishToEnglish.map((word, key) => {
        return (
          <div key={key}>
            <div>{word.spanish}</div>
            <div>{word.english}</div>
          </div>
        )
      })}
    </div>
  )
}

export default BasicSpanish