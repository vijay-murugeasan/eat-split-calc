
import { useState } from "react"
import Button from "./Button"

export default function FormSplitBill({ friend, onSplitBill }) {

    const [bill, setBill] = useState("")
    const [userExpense, setUserExpense] = useState("")
    const [whoIsPaying, setWhoIsPaying] = useState("user")
    const friendExpense = bill ? bill - userExpense : ''

    function handleSubmit(e) {
        e.preventDefault()
        if (!bill || !userExpense) return
        onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense)
    }



    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split Bill With {friend.name}</h2>

            <label>💰Bill Value</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

            <label>🧍Your Expense</label>
            <input type="text" value={userExpense} onChange={(e) => setUserExpense(Number(e.target.value) > bill ? userExpense : Number(e.target.value))} />

            <label>👨🏻‍🤝‍👩🏻{friend.name}'s Expense</label>
            <input type="text" disabled value={friendExpense} />

            <label >🤑Who's Paying The Bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>
            <Button>Add</Button>
        </form >

    )
}