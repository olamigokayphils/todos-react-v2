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

    function deleteActivity(index){
        let controlData = [...activityList]
        controlData.splice(index, 1)
        setActivityList(controlData)
    }

    function completeTask(index, boolean){
        let controlData = [...activityList]
        controlData[index].completed = boolean
        setActivityList(controlData)
    }

    return (
        <div className="main-board">
            {/** Activity Board */}
            <form className="activity-form">
                <input className="form-input" placeholder="Enter Activity" />
                <button type="submit" className="form-button">Add</button>
            </form>
            {/**  End Activity Form */}

      {/** Activity List */}
      <h3 className="activity-list-title">My Activities <small className="task-count">(3 of 3 Tasks completed)</small></h3>
      {activityList.map((item, index) => {
          return (
              <div key={index}>
          <Activity activity={item} completeTask={completeTask} deleteActivity={deleteActivity} />
          </div>
          )
      })}
    </div>
    )
}