import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Проверяем, если в запросе уже есть поддерживаемая локаль
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Если путь не содержит локаль, перенаправляем
  if (pathnameIsMissingLocale) {
    // Проверяем, есть ли сохраненная локаль в куки
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value

    let locale = cookieLocale || getLocale(request)

    const searchParamsString = searchParams.toString()
    const query = searchParamsString ? `?${searchParamsString}` : ''

    // Если куки не установлены, то используем определенную локаль
    if (!cookieLocale) {
      // Сохраняем локаль в куки
      const response = NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${query}`,
          request.url,
        ),
      )

      locale && response.cookies.set('NEXT_LOCALE', locale, { path: '/' })
      return response
    }

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${query}`,
        request.url,
      ),
    )
  }

  return NextResponse.next()
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
