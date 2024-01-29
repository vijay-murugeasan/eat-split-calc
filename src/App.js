import { useState } from 'react'
import Button from './Components/Button';
import FormSplitBill from './Components/FormSplitBill';
import FormAddFriend from './Components/FormAddFriend';
import FriendsList from './Components/FriendsList';
import './App.css'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App() {

  const [friends, setFriends] = useState(initialFriends)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend() {
    setIsOpen(show => !show)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
    setIsOpen(false)
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((crr) => crr?.id === friend.id ? null : friend)
    setIsOpen(false)
  }

  function handleSplitBill(value) {
    setFriends((friends) => friends.map((friend) => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null)
  }

  return (
    <div className="container">
      <div className="row vh-100 align-items-center">
        <div className="col-md-12 col-lg-6">
          <div className="sidebar">
            <FriendsList friends={friends} onSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
            <div>
              {isOpen && <FormAddFriend onAddFriend={handleAddFriend} />}
              <Button onClick={handleShowAddFriend} isOpen={isOpen}>{isOpen ? 'Close' : 'Add Friend'}</Button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          {selectedFriend && <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id} />}
        </div>
      </div>
    </div>
  )
}


