import styles from './information.module.scss'
import Aside from './aside'
import BasicSpanish from './basicSpanish'
interface Props {

}

const Information = ({}: Props) : JSX.Element => {

  return (
    <div className={`container mx-auto my-8 px-5 relative ${styles.container}`}>
      <div className="mb-8">
        <h2 className="sm:text-4xl text-2xl font-bold mb-4 text-sky-700">About Gran Caraina</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="sm:text-4xl text-2xl font-bold my-4 text-sky-700">Maspalomas</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <BasicSpanish />
      </div>
      <Aside />
    </div>
  )
}

export default Information