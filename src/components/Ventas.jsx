import Footer from './Footer'

export function Ventas ({ ventas }) {
  return (
  <>
    <div className="flex gap-3">
      {JSON.stringify(ventas)}
    </div>
    <Footer/>
    </>
  )
}
