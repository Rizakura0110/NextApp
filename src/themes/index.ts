import colors from './colors'
import fontSizes from './fontSizes'
import letterSpacings from './letterSpacings'
import lineHeights from './lineHeights'
import space from './space'

export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resource, init)

  if (!res.ok) {
    const errorRes = await res.json()
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました',
    )

    throw error
  }

  return res.json()
}

export const theme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const
