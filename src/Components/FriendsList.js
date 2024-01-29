import Friend from "./Friend"

export default function FriendsList({ friends, onSelectedFriend, selectedFriend }) {
    return (
        <ul>
            {friends.map(friend => <Friend friend={friend} key={friend.id} onSelectedFriend={onSelectedFriend} selectedFriend={selectedFriend} />)}
        </ul>
    )
}