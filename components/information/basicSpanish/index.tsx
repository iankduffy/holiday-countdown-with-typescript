
interface Props {

}

const spanishToEnglish = [
  {
    spanish: 'Hola', 
    english: 'Hello'
  }, 
  {
    spanish: 'baño', 
    english: 'bathroom'
  },
  {
    spanish: 'Adiós', 
    english: 'Goodbye'
  },
  {
    spanish: 'Por favor', 
    english: 'Please'
  }, 
  {
    spanish: 'Lo siento', 
    english: 'Sorry'
  },
  {
    spanish: 'Buenos días', 
    english: 'Good morning'
  },
  {
    spanish: 'Buenas tardes', 
    english: 'Good afternoon'
  },
  {
    spanish: 'Buenas noches', 
    english: 'Good evening'
  },
  {
    spanish: 'Me llamo…', 
    english: 'My name is…'
  },
  {
    spanish: 'Mucho gusto', 
    english: 'Nice to meet you'
  },
  {
    spanish: 'Yo no comprendo', 
    english: 'I do not understand'
  },
]

const BasicSpanish = ({}: Props) : JSX.Element => {

  return (
    <div className={''}>
      <h2 className="sm:text-4xl text-2xl font-bold my-4 text-sky-700">Basic Spanish</h2>
      <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white text-sm shadow-sm">
        <thead>
          <tr>
            <th className="w-1/2 border border-slate-300 p-2">Spanish</th>
            <th className="w-1/2 border border-slate-300 p-2">English</th>
          </tr>
        </thead>
        <tbody>
          {spanishToEnglish.map((word, key) => {
            return (
              <tr key={key}>
                <td className="w-1/2 border border-slate-300 p-2 text-center">{word.spanish}</td>
                <td className="w-1/2 border border-slate-300 p-2 text-center">{word.english}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BasicSpanish