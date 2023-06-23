function SlidersChange() {
    const sliderValue = document.querySelector('.slider__input').value
 
    const boxEl = document.getElementById('box')

    boxEl.style.width = sliderValue + 'px'
    boxEl.style.height = sliderValue + 'px'
  }
 
  const debounceHandleSliderChange = _.debounce(SlidersChange, 100)
 
  document.querySelector('.slider__input').addEventListener('input', debounceHandleSliderChange)

  const sliderInputEl = document.querySelector('.slider__input')
  const sliderImageEl = document.querySelector('.slider__image')

  function SliderChange() {
    
    const value = sliderInputEl.value;
    const imageSize = value * 3;  
    sliderImageEl.style.width = `${imageSize}px`
  }

  function debounce(funct, delay) {
    let timeOutId;
    return function () {
      clearTimeout(timeOutId);

      timeOutId = setTimeout(funct, delay);
    }
  }

  
  const debounceSliderChange = _.debounce(SliderChange, 500)
  sliderInputEl.addEventListener('input', debounceSliderChange)