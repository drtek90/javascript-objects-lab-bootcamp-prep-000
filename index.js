var recipes = {}

function deleteFromObjectByKey(o,k){
  var o2 = Object.assign({},o);
  delete o2[k];
  return o2;
}

function updateObjectWithKeyAndValue(o,k,v){
  var o2 = Object.assign({},o);
  o2[k] = v;
  return o2
}

function destructivelyUpdateObjectWithKeyAndValue(o,k,v){
  o[k]=v;
}

function destructivelyDeleteFromObjectByKey(o,k){
  delete o[k];
}