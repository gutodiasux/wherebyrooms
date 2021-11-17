import './styles.scss';

type RoomProps = {
  meetingId: string,
  startDate: string,
  endDate: Date,
  roomUrl: string,
}

export function Room({
  meetingId,
  startDate,
  endDate,
  roomUrl }: RoomProps) {
  return (
    <div className="room">
      <div className="room-id">
        <span>{meetingId}</span>
      </div>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <div className="room-link">
        <input type="text" value={roomUrl} name="roomLink" id="roomLink" disabled readOnly />
      </div>
    </div>
  )
}
