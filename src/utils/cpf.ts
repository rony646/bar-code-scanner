export const hideCPF = (cpf: string): string => {
  const cpfWithoutFirstThreeNumbers = cpf.replace(/^.{3}/g, '•••')
  const cpfWithoutLastTwoNumbers = cpfWithoutFirstThreeNumbers.slice(0, -2)

  return `${cpfWithoutLastTwoNumbers}••`
}

export const cpfFormatter = (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const removeAllSpecialCharacters = (cpfOrCnpj: string): string => {
  const formattedCpfOrCnpj = cpfOrCnpj
    .replaceAll('.', '')
    .replaceAll('/', '')
    .replaceAll('-', '')

  return formattedCpfOrCnpj
}
