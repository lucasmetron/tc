export function returnCompanyName(name) {

  if(name.length % 3 && name.length % 5)return "TC/SENCON"
  if(name.length % 3)return "TC"
  if(name.length % 5 )return "SENCON"
  
  return 'Sem empresa'
}
