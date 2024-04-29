


    
        function fun(a)  
        {  
            document.getElementById("display").value+=a;  
        }  
        function C()  
        {  
            document.getElementById("display").value = "";  
        }  
        function B()  
        {  
            var y = document.getElementById("display").value;  
            document.getElementById("display").value = y.slice(0, y.length-1);  
        }  
        function res()  
        {   
            var a = document.getElementById("display").value;  
            document.getElementById("display").value=a+"="+eval(a);  
        }  
    