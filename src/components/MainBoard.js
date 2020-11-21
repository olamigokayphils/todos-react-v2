import { useState } from "react"
import Activity from "./resources/Activity"

export default function MainBoard() {
    const [activityList, setActivityList] = useState([
        {
            id: 0,
            task: "Drive to the Cinema",
            completed: false
        },
        {
            id: 1,
            task: "A movie tonight",
            completed: false
        },
        {
            id: 2,
            task: "Take a nap",
            completed: false
        }
    ])

    const [formValue, setFormValue] = useState("")

    function deleteActivity(id){
        let controlData = activityList.filter((item) => item.id !== id )
        setActivityList(controlData)
    }

    function completeTask(index, boolean){
        let controlData = [...activityList]
        controlData[index].completed = boolean
        setActivityList(controlData)
    }

    function HandleSubmit(){
        if(!formValue) return alert("Empty form Value")
        //
        const newestID = activityList.length
        let updatedTask = [...activityList]
        updatedTask.push({
            id: newestID,
            task: formValue,
            completed: false
        })
        setActivityList(updatedTask)
        // Reset Form
        setFormValue("")
    }

    return (
        <div className="main-board">
            {/** Activity Board */}
            <form onSubmit={(event)=> { event.preventDefault(); HandleSubmit()}} className="activity-form">
                <input value={formValue} onChange={(event)=> setFormValue(event.target.value)} className="form-input" placeholder="Enter Activity" />
                <button type="submit" className="form-button">Add</button>
            </form>
            {/**  End Activity Form */}

      {/** Activity List */}
      <h3 className="activity-list-title">My Activities <small className="task-count">({activityList.filter((item)=> item.completed).length} of {activityList.length} Tasks completed)</small></h3>
      {activityList.map((item, index) => {
          return (
              <div key={index}>
          <Activity activity={item} index={index} completeTask={completeTask} deleteActivity={deleteActivity} />
          </div>
          )
      })}
    </div>
    )
}