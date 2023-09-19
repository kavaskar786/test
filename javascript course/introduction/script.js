 //this is an alert
        // alert("hello");
        //dynamically types languages
        // let amount = 0 //iniialization
        // amount = 1000
        // // amount = "free"
        // console.log("Your bill amount is RS." + amount)
        //  const pi = 3.14
        //  pi=5 // constant value

        // operators
        // a=10
        // b=20
       //   let name=prompt("how many apples do you want?")
       //   console.log("hello",Number(name)+5)


       // str1="hello"
       // str2="world"
       

       //trim,trimstart,trimend
       //padend.padstart
       //charAt,charCodeAt-gives unique code character
       //inderOf('e')-5
       //search()
       //.includes- tell the word is there or what
       //.startswith,endswith
       //arrays
       // let json6=`[
       //        {
       //            "Stock":"TCS",
       //            "Price":3500
       //        },
       //        {
       //            "Stock":"HUL",
       //            "Price":2500
       //        },
       //        {
       //            "Stock":"SBI",
       //            "Price":550
       //        }
       //    ]`
       // let parsed=JSON.parse(json6)
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.JSON())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))

fetch('https://api-thirukkural.vercel.app/api?num=25')
.then(res => {
    if(res.ok)
        console.log('success')
    else
        console.log('Failed')
    return res.json()
})
.then(msg => console.log(msg.line1,msg.line2,msg.tam_exp) )
.catch(err=>console.log(err))






