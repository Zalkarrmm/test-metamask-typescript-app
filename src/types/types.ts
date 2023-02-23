export interface ParticipantsState {
  participants: Array<ClientData>
  loading: boolean
  user: ClientData
}
export interface ClientData {
  address: string
  id: string
  username: string
  email: string
}
export interface ParticipantsData {
  data: {
    items: ClientData[]
  }
}
export interface RequestFuncProps {
  url: string
  type: string
}