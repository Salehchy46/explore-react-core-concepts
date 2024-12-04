// export default function Todo({task, isDone}){
//   task = "Ami Ghumabo"
//   return (
//     <li>Task : {task}</li>
//   )
// }

//Conditional Rendering 1
// export default function Todo({task, isDone}){
//   if(isDone === true){
//     return <li>Finished: {task}</li>
//   }
//   else{
//     return <li>Work on: {task}</li>
//   }
// }

//Conditional Rendering 2
// export default function Todo({task, isDone}){
//   if(isDone === true){
//     return <li>Finished: {task}</li>
//   }
//     return <li>Work on: {task}</li>
// }

//Conditional Rendering 3
// export default function Todo({task, isDone}){
//     return (
//       <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
//   }


//Conditional Rendering 4
// export default function Todo({task, isDone}){
//   return (
//     <li>{task} {isDone || ': Do it'}</li>
//   )
// }

//Conditional rendering 5
export default function Todo({task, isDone}){
  return (
    <li>{task} {isDone && ': Done'}</li>
  )
}