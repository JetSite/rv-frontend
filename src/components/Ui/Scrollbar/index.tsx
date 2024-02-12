'use client'
import React, { Dispatch, RefObject, SetStateAction, useState } from 'react'
import ReactScrollbarsCustom, {
  Scrollbar as ScrollbarType,
  ScrollbarProps,
} from 'react-scrollbars-custom'
import {
  ElementPropsWithElementRef,
  ElementRef,
  ScrollState,
} from 'react-scrollbars-custom/dist/types/types'

interface ScrollbarsProps extends ScrollbarProps {
  setScroll?: Dispatch<SetStateAction<number | undefined>>
  isShowTrack?: boolean
  innerRef?: any
}

/**
 * This component enhances react-scrollbars-custom with autohide.
 *
 * @see https://github.com/xobotyi/react-scrollbars-custom/issues/46#issuecomment-554425245
 */
export function Scrollbar({
  isShowTrack,
  innerRef,
  setScroll,
  ...props
}: ScrollbarsProps) {
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const isShow = isScrolling || isMouseOver

  const onScroll: React.UIEventHandler<HTMLDivElement> &
    ((
      scrollValues: ScrollState,
      prevScrollState: ScrollState,
    ) => void) = event => {
    !!setScroll && setScroll((event as ScrollState).scrollTop)
  }

  const onScrollStart = ({ scrollTop }: { scrollTop: number }) => {
    setIsScrolling(true)
  }
  const onScrollStop = ({ scrollTop }: { scrollTop: number }) => {
    // !!props.setScroll && props.setScroll(scrollTop)
    setIsScrolling(false)
  }
  const onMouseEnter = () => setIsMouseOver(true)
  const onMouseLeave = () => setIsMouseOver(false)

  const trackProps = {
    renderer: ({
      elementRef,
      style,
      ...restProps
    }: ElementPropsWithElementRef) => {
      return (
        <span
          {...restProps}
          ref={elementRef}
          style={{
            ...style,
            opacity: isShowTrack || isScrolling || isMouseOver ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out',
            width: '8px',
            backgroundColor: 'inherit',
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )
    },
  }

  const wrapperProps = {
    renderer: ({
      elementRef,
      style,
      key,
      ...restProps
    }: ElementPropsWithElementRef) => (
      <div
        key={key}
        {...restProps}
        ref={elementRef}
        style={{ ...style, right: 0 }}
      />
    ),
  }

  return (
    // @see https://github.com/xobotyi/react-scrollbars-custom/issues/187
    // @ts-ignore
    <ReactScrollbarsCustom
      ref={innerRef}
      onScroll={onScroll}
      wrapperProps={wrapperProps}
      trackXProps={trackProps}
      trackYProps={trackProps}
      onScrollStart={onScrollStart}
      onScrollStop={onScrollStop}
      scrollDetectionThreshold={500} // ms
      {...props}
    />
  )
}
