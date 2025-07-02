import { Languages } from "../molecules/Languages"

export const Game = () => {
  return (
    <section className='game'>
      <div className='header'>
        <Languages></Languages>
      </div>
      <div className="gameboard"></div>
    </section>
  )
}