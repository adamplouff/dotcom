import type { StringLiteralUnion } from "shiki"

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: StringLiteralUnion) {
  const dateToFormat = new Date(date)
  const year = dateToFormat.getFullYear()
  const month = String(dateToFormat.getMonth() + 1).padStart(2, '0')
  const day = String(dateToFormat.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
// 	// Safari is mad about dashes in the date
// 	const dateToFormat = new Date(date.replaceAll('-', '/'))
// 	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
// 	return dateFormatter.format(dateToFormat)
// }
