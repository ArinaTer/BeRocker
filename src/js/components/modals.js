import { scrollStop } from "../base/utils.js";

export function modals() {

    const modalTrigger = document.querySelectorAll('[data-open-modal]');
    const modals = document.querySelectorAll('.modal');
    function closeModal(modal) {
        modal.classList.remove('show');
    }
    let stopScroll = true
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentModalId = btn.getAttribute('data-open-modal');
            const targetModal = document.getElementById(currentModalId);

            if (stopScroll) {
                // lenisScroll.stop();
                scrollStop(true)
                stopScroll = false
            } else {
                // lenisScroll.start();
                scrollStop(false)
                stopScroll = true
            }

            if (targetModal) {
                targetModal.classList.toggle('show');
            }

        });
    });
    modals.forEach(modal => {
        const closeButton = modal.querySelector('[data-modal-close]');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                closeModal(modal);
                // lenisScroll.start();
                scrollStop(false)
            });
        }

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
                // lenisScroll.start();
                scrollStop(false)
            }
        });
    });


}