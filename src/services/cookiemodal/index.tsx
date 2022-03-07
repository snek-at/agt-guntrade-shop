import React from 'react'

interface CookieValues {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export class CookieModalService {
  static key = 'cookiesettings'

  static isStored(): boolean {
    return localStorage.getItem(CookieModalService.key) !== null
  }

  static getValues(): CookieValues {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(CookieModalService.key)

      if (stored) {
        return JSON.parse(stored)
      }
    }

    return {
      essential: true,
      analytics: false,
      marketing: false
    }
  }

  static setValues(values: CookieValues) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CookieModalService.key, JSON.stringify(values))
    }
  }

  static clearValues() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CookieModalService.key)
    }
  }
}

export const useCookieState = () => {
  const [accepted, setAccepted] = React.useState(CookieModalService.isStored())
  const [cookie, setCookie] = React.useState(CookieModalService.getValues())

  React.useEffect(() => {
    CookieModalService.setValues(cookie)
    setAccepted(true)
  }, [cookie])

  const updateCookie = React.useCallback(
    (name: keyof typeof cookie, value: boolean) => {
      setCookie({
        ...cookie,
        [name]: value
      })
    },
    [setCookie, cookie]
  )

  const setValues = React.useCallback(
    (values: CookieValues) => {
      setCookie(values)
    },
    [setCookie]
  )

  const clearValues = React.useCallback(() => {
    CookieModalService.clearValues()
    setAccepted(false)
  }, [])

  return {cookie, accepted, setValues, clearValues, updateCookie}
}
