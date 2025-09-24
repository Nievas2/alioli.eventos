const Images = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 grid-rows-8 lg:grid-cols-8 lg:grid-rows-8">
      <div className="col-span-1 md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-6 bg-blue-main">
        1
      </div>
      <div className="col-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7 bg-blue-main">
        2
      </div>
      <div className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-5 lg:col-start-3 lg:row-start-1 bg-blue-main">
        3
      </div>
      <div className="col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-1 bg-blue-main">
        4
      </div>
      <div className="col-span-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-6 bg-blue-main">
        5
      </div>
      <div className="col-span-1 md:col-span-2 md:row-span-4 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-6 bg-blue-main">
        6
      </div>
      <div className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-4 lg:col-start-7 lg:row-start-5 bg-blue-main">
        7
      </div>
    </div>
  )
}
export default Images
