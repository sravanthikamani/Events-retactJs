// Write your code here

import './index.css'

const EventItem = props => {
  const {eventListDetails, clickEvent, activeId} = props
  const {id, name, imageUrl, location, registrationStatus} = eventListDetails

  const className = activeId === id ? 'add-border' : ''

  const onClickEvent = () => {
    clickEvent(registrationStatus, id)
  }

  return (
    <li className="list-item ">
      <button type="button" className="event-btn" onClick={onClickEvent}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${className}`}
        />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
