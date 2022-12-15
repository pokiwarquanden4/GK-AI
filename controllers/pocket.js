export const pocketActions = () => {
    const pocket = document.querySelector('.pocket')
    const exitButton = document.querySelector(".exitButton")

    pocket.style.display = 'flex'
    exitButton.addEventListener('click', () => {
        pocket.style.display = 'none'
    })
}