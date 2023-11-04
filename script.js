const container = document.querySelector('.container');
    for (let i = 1; i<=16; i++) {
    const column = document.createElement('div');
    container.appendChild(column);
    column.classList.add("column");
    for (let j = 1; j <= 16; j++) {
        const row = document.createElement('div');
        column.appendChild(row);
        row.classList.add("row");
        row.addEventListener('click', () => {
            row.classList.add('color');
        })
        }
    }
