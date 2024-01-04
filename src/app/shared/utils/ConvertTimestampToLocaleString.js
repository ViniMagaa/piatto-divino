export function convertTimestampToLocaleString(timestamp, locale) {
  return new Date(
		timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
	).toLocaleString(locale);
}