let todoList = []; //EKledigimiz to do ları tutacagımız list
addTodo = ()=>{
    let todoInput = document.querySelector("#todoInput").value;
    //index.html deki  text inputumuza erişiyoruz
    if(todoInput=="")
    {
        //Eğer boş ise kontrol yapıp alert verdiriyoruz
        alert("Lütfen Bir öğe giriniz");
    }else{
        //Boş değilse todolist dizisinin içerisinde ınput değerini pushluyoruö
        todoList.push(todoInput);
        //Sonra ınputu clearlıyorum
        todoInput.value =""; //inputun içini temizliyorum
        showTodolist(); //listeyi güncelliyorum

    }
}
deleteTodoItem = (index)=>{ //delete fonksiyonu içerisinde index parametresi veriyoruz
    //silinecek olan indexi for döndürerek i den alıcam
    todoList.splice(index,1); //listeden seçilen indexteki öğeyi siliyorum
    showTodolist();
    
}
showTodolist = ()=>{
    //İnputların listelenecegi  ul ye ulaşıyorum
    let todoListElement = document.querySelector("#todoList");
    todoListElement.innerHTML = "" //to do listesini temizliyorum
    for(let i = 0; i < todoList.length;i++) //yukardaki todo listesinin değerlerini dönüyorum
    {
        let todoItem = document.createElement("li"); //bütün to dolar için li elementi olusturuoyrum
        todoItem.innerText = todoList[i]; //lilerinin içine girilecek olan metin burada todoList'in içerisindeki değer
        //yaani ordan gelen i değeri olacak metinleri döngüde almıştım
        let deleteBtn = document.createElement("button"); //createelement ile silme butonu olusturuyorum
        deleteBtn.innerText = "Sil"; //butonun içierisine sil yazdım
        deleteBtn.addEventListener("click",function(){ //silme butonune click eventi ekliyorum
            //fonksiyonu cagirip oradaki i yi yani indexi silecek
            deleteTodoItem(i);
        })
        todoItem.appendChild(deleteBtn); //eklenen her bir to do li sine silme butonu ekliyorum appenChild ile
        todoListElement.appendChild(todoItem); //todolistElement deki ul in içerisine child olarak li'leri
        //yani todoitemlari li olarak eklemiş oluyorum.
    }
    
}