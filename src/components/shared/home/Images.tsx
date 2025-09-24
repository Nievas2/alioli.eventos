const Images = () => {
  return (
    <div className="grid grid-cols-8 grid-rows-8 gap-4">
      <div className="col-span-2 row-span-6">1</div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-7">2</div>
      <div className="col-span-4 row-span-5 col-start-3 row-start-1">3</div>
      <div className="col-span-2 row-span-4 col-start-7 row-start-1">4</div>
      <div className="col-span-2 row-span-3 col-start-3 row-start-6">5</div>
      <div className="col-span-2 row-span-3 col-start-5 row-start-6">6</div>
      <div className="col-span-2 row-span-4 col-start-7 row-start-5">7</div>
    </div>
  )
}
export default Images
