
function updateObjectWithKeyAndValue(object, key, value){
  var object2 = Object.assign({}, object) 
  object2[key] = value
  return object2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


