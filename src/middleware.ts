import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Функция для определения локали на основе запроса
function getLocale(request: NextRequest): string | null {
  const { pathname } = request.nextUrl

  // Проверка на наличие локали в пути URL
  const pathLocale = i18n.locales.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  console.log('startsWith', pathname) // Лог для проверки пути запроса

  // Если локаль найдена в пути URL, возвращаем её
  if (pathLocale) {
    console.log('Path locale found:', pathLocale)
    return pathLocale
  }

  // Если локаль не найдена в пути, используем Negotiator для определения локали на основе заголовков запроса
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Определение доступных локалей
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Определение языков, предпочтительных для пользователя, на основе заголовков запроса
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  // Выбор наилучшей локали на основе предпочтений пользователя и доступных локалей
  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  console.log('Negotiated locale:', locale) // Лог для отображения выбранной локали

  return locale
}

// Основная функция middleware для обработки запросов
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Проверка, содержит ли путь уже поддерживаемую локаль
  const pathnameLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )
  console.log('pathname', pathname) // Лог для проверки текущего пути

  // Получение сохраненной локали из куки (если есть)
  const cookieLocale = request.cookies.get('LOCALE')?.value || null

  // Определение текущей локали (сначала из куки, затем из запроса)
  let locale = cookieLocale || getLocale(request)

  console.log('locale', locale)

  // Преобразование параметров запроса в строку
  const searchParamsString = searchParams.toString()
  const query = searchParamsString ? `?${searchParamsString}` : ''

  // Формирование результирующего URL с добавленной локалью
  const resultUrl = `/${locale}${pathname}${query}`

  // Если путь не содержит локали, перенаправляем на путь с локалью
  if (pathnameLocale) {
    if (!cookieLocale) {
      console.log('resultUrl & !cookieLocale', resultUrl) // Лог для отображения URL перенаправления без куки

      // Создаем ответ для перенаправления и сохраняем локаль в куки
      const response = NextResponse.redirect(new URL(resultUrl, request.url))
      locale && response.cookies.set('LOCALE', locale, { path: '/' })
      return response
    }
    console.log('resultUrl & cookieLocale', resultUrl) // Лог для отображения URL перенаправления с установленной куки

    return NextResponse.redirect(new URL(resultUrl, request.url))
  }

  // Если куки с локалью еще нет, устанавливаем её
  if (!cookieLocale && locale) {
    const response = NextResponse.next()
    response.cookies.set('LOCALE', locale, { path: '/' })
    return response
  }

  // Если локаль уже установлена, продолжаем обработку запроса
  return NextResponse.next()
}

// Конфигурация для исключения некоторых путей из обработки middleware
export const config = {
  // Исключаем из обработки API запросы и статические файлы
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts).*)'],
}
