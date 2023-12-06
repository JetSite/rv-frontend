import { create } from 'zustand'

export interface IStoreData {
  newsDate: string[]
  eventsDate: string[]
}

export interface IUseStoreState {
  data: IStoreData
  setData: (data: IStoreData | null) => void
  reset: () => void
}

const initialState: IStoreData = {
  newsDate: [],
  eventsDate: [],
}

export const useStoreDate = create<IUseStoreState>((set, get) => ({
  data: initialState,
  setData: data => {
    set(state => ({
      data: {
        ...state.data,
        ...data,
      },
    }))
  },
  reset: () => {
    set(() => ({ data: initialState }))
  },
}))
