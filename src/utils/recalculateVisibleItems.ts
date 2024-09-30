import { INavItem } from '@/types/layout'
import { Dispatch, RefObject, SetStateAction } from 'react'

export const recalculateVisibleItems = (
  ref: RefObject<HTMLUListElement>,
  data: INavItem[],
  setHiddenItems: Dispatch<SetStateAction<INavItem[]>>,
) => {
  if (ref.current) {
    const availableWidth = ref.current.offsetWidth
    let totalWidth = 0
    const newHiddenItems: INavItem[] = []

    Array.from(ref.current.children).forEach((child: any) => {
      child.style.display = 'inline-block'
      totalWidth += child.offsetWidth

      if (totalWidth > availableWidth) {
        const findItem =
          data.find(item => item.id.toString() === child.dataset.id) || null

        findItem && newHiddenItems.push(findItem as INavItem)
        child.style.display = 'none'
      }
    })

    setHiddenItems(newHiddenItems)
  }
}
