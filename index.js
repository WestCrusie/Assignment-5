let data = [
    
    // {
    //     name: "Shea Kief",
    //     age: 62,
    //     gender: "Male",
    //     phone_number: "+47 480 706 9357",
    //     email: "skiefd@tuttocitta.it",
    // },
    {
        name: "Anna O'Fergus",
        age: 34,
        gender: "Female",
        phone_number: "+86 128 603 2500",
        email: "aoferguse@mashable.com",
    },
];

$(document).ready(function () {
    let ouput;
    for (let i = 0; i < data.length; i++) {
        ouput = `
        <div class="form">
          <h2 class="fname">${data[i].name}</h2>
          <h4 class="age">${data[i].age}</h4>
          <h4 class="gender">${data[i].gender}</h4>
          <h4 class="mail">${data[i].phone_number}</h4>
          <h4 class="phone">${data[i].email}</h4>
        </div>
        `;
        $(".cardForm").append(ouput);
    }
});
