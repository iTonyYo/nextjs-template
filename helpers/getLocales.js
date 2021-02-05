export default async function getLocales(locale) {
  return (await import(`locales/${locale}`)).default;
}
