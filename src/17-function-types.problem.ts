import { Equal, Expect } from './helpers/type-utils'

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: OnFocusChange) => {
  window.addEventListener('focus', () => {
    onFocusChange(true)
  })

  window.addEventListener('blur', () => {
    onFocusChange(false)
  })
}

addListener((isFocused) => {
  console.log({ isFocused })

  type tests = [Expect<Equal<typeof isFocused, boolean>>]
})

type OnFocusChange = (focus: boolean) => void

/**
 * onFocusChange is a listener on focus i.e. FocusOnBlurListener
 */
