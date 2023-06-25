export function getRidOfRepeated (arreglo, propiedad) {
  const arregloUnico = arreglo.filter((elemento, index, self) =>
    index === self.findIndex((obj) => obj[propiedad] === elemento[propiedad])
  )

  return arregloUnico
}
