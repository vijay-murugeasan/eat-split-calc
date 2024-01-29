import Button from "./Button"

export default function Friend({ friend, onSelectedFriend, selectedFriend }) {

    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={friend.image} alt={friend.alt} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && <p className="red">You Owe {friend.name} ${Math.abs(friend.balance)} </p>}
            {friend.balance > 0 && <p className="green">{friend.name} Owes you ${friend.balance} </p>}
            {friend.balance === 0 && <p>You and {friend.name} are even </p>}
            <Button onClick={() => onSelectedFriend(friend)} >{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    )
}