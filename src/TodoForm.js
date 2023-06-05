import { useState } from "react"

function ToDoForm({addTask}) {
    const [userInput, setuserInput] = useState('')

    const handleChange = (e) => {
        setuserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setuserInput("")
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Ввeдите значение..."
            />
            <button>Сохранить</button>
        </form>
    )
}
export default ToDoForm