import Footer from "components/footer"
import Header from "components/header"

const Main = ({ children, }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-2">
      <Header />
      <main
        className="
                row-start-2 lg:col-start-2 lg:col-span-4
                border border-solid border-black
                flex flex-col gap-2
                "
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Main