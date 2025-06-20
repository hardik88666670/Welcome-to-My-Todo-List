
                let btn=document.getElementById('addbtn')
                let todos=document.getElementById('todos')
                let user=document.getElementById('userinput')

                btn.addEventListener('click', addTodo)

                function addTodo(){
                        let userInput= user.value.trim()
                        if(userInput !==''){
                                let newTask=document.createElement('li')
                                newTask.innerHTML=`
                                <p>
                                        <input type="text" class="todo-item" value='${userInput}' disabled/>
                                        <span class="edit-btn edittodo">EDIT</span>
                                        <span class="edit-btn updatetodo" style="display:none;">UPDATE</span>
                                        <span class="delete-btn deletetodo">DELETE</span>   
                                </p>`
                                
                                todos.appendChild(newTask)
                                user.value=''

                                let edit= newTask.querySelector('.edittodo')
                                let todoItem=newTask.querySelector('.todo-item')
                                let updatetodo=newTask.querySelector('.updatetodo')
                                let deleteBtn=newTask.querySelector('.deletetodo')
                                edit.addEventListener('click',function(){
                                        todoItem.disabled = false
                                        todoItem.focus()
                                        updatetodo.style.display = "inline-block"
                                        edit.style.display ="none"
                                })    
                                
                                updatetodo.addEventListener('click',function(){
                                        todoItem.disabled=true
                                        updatetodo.style.display='none'
                                        edit.style.display='inline-block'
                                })

                                deleteBtn.addEventListener('click', function(){
                                        newTask.remove()
                                })
                        }
                }
