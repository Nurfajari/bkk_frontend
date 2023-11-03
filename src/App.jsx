import './index.css'

export default function App() {
  return (
    <div className="flex justify-between px-5 bg-slate-200 py-3">
      <div className="">
        <h1 className='text-2xl'>Logo</h1>
      </div>
      <div className="flex gap-5 text-2xl">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Sign in</a>
      </div>
    </div>
  )
}