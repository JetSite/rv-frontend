import { IStandartItem } from '@/types/item'

type IChangeElementPosition = (
  arr: IStandartItem[],
  positions: number[],
) => IStandartItem[]

export const changeElementPosition: IChangeElementPosition = (
  arr,
  positions,
) => {
  const importantArray = arr.filter(
    (item, index) => item.important && index < positions.length + 1,
  )
  const newArr = arr
    .map(item =>
      item.important && !importantArray.includes(item)
        ? { ...item, important: false }
        : item,
    )
    .filter(item => !item.important)

  positions.forEach((newPosition, index) => {
    if (newPosition !== undefined) {
      const itemToMove = importantArray[index]
      if (itemToMove) {
        newArr.splice(newPosition, 0, itemToMove)
      }
    }
  })

  return newArr
}
