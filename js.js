const modal = {
    open(){
        const modalOverlay = document.querySelector('.modal-overlay')

        modalOverlay.classList.add('active')
    }
    ,

    close(){
        const modalOverlay = document.querySelector('.modal-overlay')
        
        modalOverlay.classList.remove('active')
    }
}