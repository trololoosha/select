class Select{
    constructor(className = '.select') {
        this.parent = className;
    }
    insertSvg(){
        const img = document.createElement('img');
        img.classList.add('select__svg');
        img.src = './img/next.svg';
        document.querySelector('.select__header').appendChild(img)

    }
    createMarkup(){
        let entry = document.querySelector('.select').innerHTML;
        let entryArray = entry.split(',');
        document.querySelector('.select').innerHTML = '';

        const header = document.createElement('div');
        const header_p = document.createElement('p');
        const container = document.createElement('div');
        const items = document.createElement('ul');

        header.classList.add('select__header');
        container.classList.add('select__container');
        items.classList.add('select__items');

        document.querySelector(this.parent).appendChild(header)
        document.querySelector('.select__header').appendChild(header_p)
        document.querySelector(this.parent).appendChild(container)
        document.querySelector('.select__container').appendChild(items)

        document.querySelector('.select__header p').innerHTML = entryArray[0];

        entryArray.forEach(item => {
            const items_li = document.createElement('li');
            items_li.classList.add('select__option')
            items_li.innerHTML = item;
            document.querySelector('.select__items').appendChild(items_li)
        })
    }
    selectListeners(){
        function open(){
            document.querySelector('.select__container').classList.toggle('select_is_active')
            document.querySelector('.select__svg').classList.toggle('select__rotate')
        }
        function checkAttribute(){
            let elems = document.querySelectorAll('.select__option');
            elems.forEach(i => i.removeAttribute('data-selected'))
        }
        document.querySelector('.select__header').onclick  = () => {
            open();
        }
        document.querySelector('.select__items').onclick = (e) => {
            let target = e.target;
            let data = e.target.childNodes[0].data;
            document.querySelector('.select__header p').innerHTML = data;
            checkAttribute();
            target.setAttribute('data-selected', data);
            open();
        }
    }
    create(){
        this.createMarkup();
        this.insertSvg();
        this.selectListeners();
    }
}

const select = new Select();
select.create();
;