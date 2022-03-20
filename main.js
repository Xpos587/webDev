buttonId.onclick = () => { // при нажатии на элемент с id "buttonId" вызвать функцию:
    function countdown() {
        if (timerId.innerText != 0) timerId.innerText-- // если внутрений текст элемента с id "timerId" не = 0, уменьшить текст на 1
        else { // иначе
            clearInterval(timerInterval)
        }
    }
    const timerInterval = setInterval(countdown, 1000) // выполнять функцию countdown каждые 1000 мс. (1с)
}