export function getAge(birthday: string) {
  const today = new Date()
  const birthDate = new Date(birthday)

  let age = today.getFullYear() - birthDate.getFullYear()
  const monthOfAge = today.getMonth() - birthDate.getMonth()
  if (
    monthOfAge < 0 ||
    (monthOfAge === 0 && today.getDate() <= birthDate.getDate())
  ) {
    age--
  }
  return age
}
