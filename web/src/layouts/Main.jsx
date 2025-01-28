import Navigation from "../components/Navigation";

export default function Main({ children }) {
  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </>
  )
}