// mousemove, throttle

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y:${event.clientY}
//   `;
// }

// input, debounce

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// const option = { trailing: true, leading: true}

// inputRef.addEventListener('input', _.debounce(onInputChange, 600, option));
// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Значення: ${event.target.value}
//   `;
// }


// Потрібно затримати виконання функції при введенні тексту в поле input, щоб не перевантажувати сервер. 
// Використовуйте метод throttle з бібліотеки lodash. 

// Встановіть час затримки в мілісекундах, наприклад 500мс, 
// і передайте функцію, яку потрібно виконати при введенні тексту.

// const inputEl = document.querySelector(".practice-input")

// inputEl.addEventListener("input", _.debounce(onInputPractice, 500))

// function onInputPractice(event) {
//     console.log(event.target.value)
// }



const images = document.querySelectorAll("img")

const options = {
    rootMargin: "150px",
}

const io = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target
        const imgUrl = image.dataset.lazy

        image.src = imgUrl
        image.classList.add("appear")

        observer.unobserve(image)
      }
   })
}, options)

// io.observe(image)
images.forEach(image => io.observe(image))

