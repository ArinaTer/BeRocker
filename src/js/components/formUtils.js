export function formUtils() {
    document.querySelectorAll('.form__input-wrapper input').forEach(input => {
        input.addEventListener('input', function (e) {
            let value = e.target.value;
    
            value = value.replace(/[^0-9]/g, '').slice(0, 2);
    
            if (input.id === 'hours') {
                if (value > 12) value = '12';
            }
    
            if (input.id === 'minutes') {
                if (value > 59) value = '59';
            }
    
            e.target.value = value;
    
        });
    
    })
    
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.form__input-dropdown')) {
            document.querySelectorAll('.form__dropdown').forEach(dropdown => dropdown.style.display = 'none');
        }
    });
    
    function setupDropdown(inputId, min, max) {
        const input = document.getElementById(inputId);
        const dropdown = document.getElementById(`${inputId}-dropdown`);
        const dropdownWrapper = dropdown.querySelector('.form__dropdown-wrapper');
    
        dropdownWrapper.innerHTML = '';
    
        for (let i = min; i <= max; i++) {
            const formattedNumber = i.toString().padStart(2, '0');
            const option = document.createElement('span');
            option.textContent = formattedNumber;
    
            option.addEventListener('click', () => {
                input.value = formattedNumber; 
                dropdown.style.display = 'none';
            });
    
            dropdownWrapper.appendChild(option);
        }
    
        input.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown(dropdown);
        });
    }
    
    function toggleDropdown(dropdown) {
        const isVisible = dropdown.style.display === 'flex';
        document.querySelectorAll('.form__dropdown').forEach(d => d.style.display = 'none');
        dropdown.style.display = isVisible ? 'none' : 'flex';
    }
    
    setupDropdown('hours', 1, 12);
    setupDropdown('minutes', 1, 59);
}