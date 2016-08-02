
export default `
type Event {
  _id 	     : String,
  address    : Address,
  allDay     : Boolean,
  category   : Category,
  created    : String,
  createdBy  : User,
  description: String,
  end        : String,
  instructors: User,
  notes      : [Note],
  invited    : [{
    client   : User,
    attended : Boolean
  }],
  level      : String,
  start      : String,
  title      : String,
  updated    : String,
  updatedBy  : User
}
`;


export const eventQueries = `
  eventFind(_id: String, name: String): [Event]
  eventFindById(_id: String, name: String): Event
  eventFindOne(_id: String, name: String): Event
`;
