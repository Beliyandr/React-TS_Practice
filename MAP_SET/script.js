// for (var i = 0; i < 3; i++) {
//   debugger;
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   debugger;
//   setTimeout(() => console.log(i), 1);
// }

let a = Math.ceil(3.4)
console.log(a)

const ul = document.querySelector('.ulist');
const li = `
<li><a class="messanger msg-item-facebook-messenger" id="msg-item-10" rel="nofollow noopener" href="https://www.facebook.com/svitlo_kamenskoe-109965950385982" target="_blank"><span style="background-color: #e54040;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg></span><div class="arcu-item-label"><div class="arcu-item-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Facebook</font></font></font></font></div></div></a></li>
`
setTimeout(() => {

  ul.insertAdjacentHTML('beforeend', li)
}, 1000)

fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
  if (!res.ok) {
    throw new Error('ne ok')
  }
  return res.json();
}).then((data) => {
  console.log(data);
})


// напиши приклад MAP колекції
