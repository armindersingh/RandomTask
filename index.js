let globalObject = (function() {
    let arrayOfItems = createArrayOfItems();
    function createArrayOfItems() {
        return Array.from( { length: 9 }, ( item, index )=> ( { value: index + 1, class: `grid-item grid-item-${index +1}` } ) );
    }

    function shuffleArrayOfItems() {
        var lengthOfArray = arrayOfItems.length, temp, index;
        while (lengthOfArray > 0) {
            index = Math.floor(Math.random() * lengthOfArray);
            lengthOfArray--;
            temp = arrayOfItems[lengthOfArray];
            arrayOfItems[lengthOfArray] = arrayOfItems[index];
            arrayOfItems[index] = temp;
        }
        appendItems();
    }

    function sortArrayOfItems() {
        arrayOfItems = arrayOfItems.sort( (a,b) => { return a.value - b.value; } );
        appendItems();
    }

    function appendItems() {
        let container = document.getElementsByClassName('number-div-content')[0];
        arrayOfItems.forEach( (item) => {
            let gridItem = document.createElement('div');
            gridItem.setAttribute('class', item.class);
            gridItem.innerText = item.value;
            if(document.getElementsByClassName(item.class)[0]) 
                container.removeChild(document.getElementsByClassName(item.class)[0]);
            container.appendChild(gridItem);
        } );
    }

    appendItems();

    return {
        shuffleArrayOfItems : shuffleArrayOfItems, 
        sortArrayOfItems : sortArrayOfItems
    };
})();

