'use strict'
/*Создать инпут содержимое которого появится на странице*/
const rootDiv = document.getElementById('root');

const form = document.createElement('form');
rootDiv.appendChild(form);

const input = document.createElement('input');
form.appendChild(input);
input.classList.add('input');

const textDiv = document.createElement('div');
form.appendChild(textDiv);
textDiv.classList.add('textDiv');

input.addEventListener('input', (event) => {
    textDiv.textContent = input.value;
});

/*При нажатии кнопки Submit проверить, что введенное описание содержит не менее 3 слов
* В случае, если условие не выполняется пользователю выводится сообщение об ошибке (Форма не отправляется на
* сервер).
* В случае, если условие выполняется, форма логируется в консоль (отправляется на сервер)*/

/*По отправке формы заносить значение из инпутов в массив (состояние), в список ul, добавить
каждой li кнопку удаления. Удалить значение из представления и из состояния (массива)*/

const listWrapper = document.createElement('div');
listWrapper.classList.add('listWrapper');
rootDiv.appendChild(listWrapper);

const list = document.createElement('ul');
// list.classList.add('list');
listWrapper.appendChild(list);

let stateArray = [];

const submitButton = document.createElement('input');
submitButton.type = 'submit';
form.appendChild(submitButton);
submitButton.classList.add('submitButton');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValueArray = input.value.split(' ').filter(Boolean);
    if (inputValueArray.length >= 3) {
        console.log(inputValueArray);
        let elementId = 1;
        if (!stateArray.length) {
            stateArray.push({id: elementId, value: input.value});
        } else {
            const lastElement = stateArray[stateArray.length - 1];
            elementId = lastElement.id + 1;
            stateArray.push({id: elementId, value: input.value});
        }

        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Detete item';
        listItem.appendChild(deleteButton);
        deleteButton.addEventListener('click', (event) => {
            listItem.remove();
            stateArray = stateArray.filter((item) => item.id !== elementId);
        });

    } else {
        throw new RangeError('Description can not be less than 3 words!');
    }
});

