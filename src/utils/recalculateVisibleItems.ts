// import { INavItem } from '@/types/layout'
// import { Dispatch, RefObject, SetStateAction } from 'react'

// export const recalculateVisibleItems = (
//   ref: RefObject<HTMLUListElement>,
//   data: INavItem[],
//   setHiddenItems: Dispatch<SetStateAction<INavItem[]>>,
// ) => {
//   if (ref.current) {
//     const availableWidth = ref.current.offsetWidth
//     let totalWidth = 0
//     const newHiddenItems: INavItem[] = []

//     Array.from(ref.current.children).forEach((child: any) => {
//       child.style.display = 'inline-block'
//       totalWidth += child.offsetWidth

//       if (totalWidth > availableWidth) {
//         const findItem =
//           data.find(item => item.id.toString() === child.dataset.id) || null

//         findItem && newHiddenItems.push(findItem as INavItem)
//         child.style.display = 'none'
//       }
//     })

//     setHiddenItems(newHiddenItems)
//   }
// }

import { INavItem } from '@/types/layout'
import { Dispatch, ReactElement, RefObject, SetStateAction } from 'react'

export const recalculateVisibleItems = (
  ref: RefObject<HTMLUListElement>,
  data: INavItem[],
  setHiddenItems: Dispatch<SetStateAction<INavItem[]>>,
) => {
  if (ref.current) {
    const availableWidth = ref.current.offsetWidth - 40
    let totalWidth = 0
    const newHiddenItems: INavItem[] = []

    // Сначала восстанавливаем отображение всех элементов
    Array.from(ref.current.children).forEach((child: Element) => {
      child.classList.remove('hidden')
    })

    console.log('availableWidth', availableWidth)

    // Проверяем видимые элементы
    Array.from(ref.current.children).forEach((children: Element) => {
      const child = children as HTMLElement
      totalWidth += child.offsetWidth

      console.log('totalWidth', totalWidth)

      if (totalWidth > availableWidth) {
        // Если элемент не помещается, находим его в данных и скрываем
        const findItem =
          data.find(item => item.id.toString() === child.dataset.id) || null

        if (findItem) {
          newHiddenItems.push(findItem as INavItem)
          child.classList.add('hidden')
        }
      }
    })

    // Обновляем список скрытых элементов
    setHiddenItems(newHiddenItems)
  }
}
