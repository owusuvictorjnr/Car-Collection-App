import CustomButton from "./CustomButton"

function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 paddind-x">
        <h1 className="hero__title">
          Find, Book, or Rent a car -- quickly and easily !
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton />
      </div>
    </div>
  )
}

export default Hero
