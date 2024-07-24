import { create } from 'zustand'

export interface IStoreDataItem {
  year: string
  months: { month: string; value: string }[]
}

export interface IStoreData {
  newsDate: IStoreDataItem[]
  eventsDate: IStoreDataItem[]
  detentionData: IStoreDataItem[]
}

export interface IUseStoreState {
  data: IStoreData
  setData: (data: IStoreData | null) => void
  reset: () => void
}

const initialState: IStoreData = {
  newsDate: [],
  eventsDate: [],
  detentionData: [],
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
