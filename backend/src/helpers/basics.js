export const isANumber = (d) =>{
  return (Number(d).toString() !== 'NaN')
}
export const areNumbers =(d) =>{
  return (d.filter(e=>!isANumber(e)).lenght===0)
}
export const isIn =(number, min, max) =>{
  return !(number < min || number > max)
}
