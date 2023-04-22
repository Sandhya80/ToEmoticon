// Writing function that takes in string and returns the corresponding emoticon as a string:

const toEmoticon = (expression) =>  {
switch (expression)  {
  case 'shrug':
  return '|_{"}_|';  
  case 'smiley face':
  return ':)';  
  case 'frowny face':
  return ':(';  
  case 'winky face':
  return ';)';  
  case 'heart':
  return '<3';  
  default:
  return '|_(* ~ *)_|';  
}
}



// Trying out function:
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'
console.log(toEmoticon('smiley face'))
// Shoild return ':)'