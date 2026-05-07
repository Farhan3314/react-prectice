import { useState } from 'react'

const ListsKeys = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteList = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='lg:flex bg-gray-800 text-white h-screen overflow-auto'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-8 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Todo List</h1>

        <input
          type="text"
          placeholder='Enter Title Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
          value={details}
          required={true}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded cursor-pointer'
        > Add List </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-8'>
        <h1 className='text-4xl font-bold'>Recent Lists</h1>
        <div className='flex flex-wrap items-start justify-start gap-7 mt-6'>
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div className="overflow-auto">
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
                </div>
                <button onClick={() => deleteList(idx)}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
                > Delete </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListsKeys;