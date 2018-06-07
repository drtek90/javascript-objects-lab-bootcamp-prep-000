var recipes = {}

function deleteFromObjectByKey(o,k,v){
  var o2 = Object.assign({},o);
  delete o2.k;
  return o2;
}