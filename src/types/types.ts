export interface ParticipantsState {
  participants: Array<ClientData>
  loading: boolean
  user: ClientData
  modalIsOpen: boolean
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
export interface PersonalDataState {
  address: string
  id: string
  username: string
  email: string
  loading: boolean
}
export interface PersonalData {
  data: {
    address: string
    id: string
    username: string
    email: string
  }
}
export interface ModalProps {
  boolFromApp: boolean
}