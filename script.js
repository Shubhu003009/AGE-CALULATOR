const submit = document.querySelector('.submit');
const dob_input = document.querySelector('.user_input') 

submit.addEventListener('click',e => {

    e.preventDefault();

    const user_dob = dob_input.value
    const user_dob_date = Date.parse(user_dob)
    const user_dob_date_unparsed = new Date(user_dob_date).toLocaleString()
    const todayDate = Date.now()
    const user_dob_dateObj = new Date(user_dob)
    const user_dob_dateObj_date = user_dob_dateObj.getDate()

    const diff = todayDate - user_dob_date
    const diffDateObj = new Date(diff)
    const diff_getSeconds = new Date(diff).getSeconds()
    console.log('______________');
    console.log(diff_getSeconds)
    const diff_getMinutes = new Date(diff).getMinutes()
    console.log(diff_getMinutes)
    const diff_getHours = new Date(diff).getHours()
    console.log(diff_getHours)
    const diff_getDate = new Date(diff).getDate()
    console.log(diff_getDate)
    const diff_getMonth = new Date(diff).getMonth()
    console.log(diff_getMonth)
    const diff_getFullYear = new Date(diff).getFullYear()
    console.log(diff_getFullYear)
    const diffDateObj_tolocalstring = diffDateObj.toLocaleString()

    
    console.log('user_dob:',user_dob);
    console.log('user_dob_date:',user_dob_date);
    console.log('user_dob_date_unparsed:',user_dob_date_unparsed);
    console.log('todayDate:',todayDate);
    console.log("user_dob_dateObj::",user_dob_dateObj);
    console.log('user_dob_dateObj_date:::',user_dob_dateObj_date);

    
    const currentDate = new Date(Date.now())
    console.log("currentDate::::",currentDate);

    console.log('________________');

    console.log('diff',diff);
    console.log("diffDateObj",diffDateObj);
    console.log('diffDateObj_tolocalstring',diffDateObj_tolocalstring);




    
    // const localstringdate = currentDate.toDateString()
    // const toISOString = currentDate.toISOString()
    // const toJSON = currentDate.toJSON()
    // const toLocaleDateString = currentDate.toLocaleDateString()
    // const toLocaleString = currentDate.toLocaleString()
    // const toLocaleTimeString = currentDate.toLocaleTimeString()
    // const toString = currentDate.toString()
    // const toTimeString = currentDate.toTimeString()
    // const toUTCString = currentDate.toUTCString()

    // console.log(localstringdate);
    // console.log(toISOString);
    // console.log(toJSON);
    // console.log(toLocaleDateString);
    // console.log(toLocaleString);
    // console.log(toLocaleTimeString);
    // console.log(toString);
    // console.log(toTimeString);
    // console.log(toUTCString);
    
});