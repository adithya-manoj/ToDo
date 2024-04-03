let todo=()=>{
        let check=document.createElement('input')
        check.type = 'checkbox';
        
        let value=document.getElementById('item').value
        let element=document.createElement('li')
        let text=document.createTextNode(value)
        
        element.appendChild(check)
        element.appendChild(text)

        
        let close=document.createElement('i')
        close.className='trash fa fa-trash'
        
        element.appendChild(close)

        element.className='list'

        let container=document.getElementById('containerbody')
        containerbody.appendChild(element);

        close.addEventListener('click',()=>{
            element.remove()
        })
        document.getElementById('item').value=''
    }