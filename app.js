var login = prompt('Введите логин');
var password = prompt('Введите пароль');
var login2 = prompt('Введите логин') 
var password2 = prompt('Введите пароль') 


if(login === login2 && password === password2){
  console.log('Добро пожаловать');
}else if(login !== login2){
  console.log('Неверный логин');
}else if(password !== password2){
 console.log('Неверный пароль');}
 else{
  console.log('Что-то пошло не так...');
}