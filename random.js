export default (min = 1, max = 1000) =>{
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


