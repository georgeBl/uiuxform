document.addEventListener('DOMContentLoaded', function() {

        $('form').submit(function(e){

            $('#errorFirstName').attr('hidden', true)
            $('#errorLastName').attr('hidden', true)
            $('#errorEmail').attr('hidden', true)
            $('#errorPassword').attr('hidden', true)
            $('#errorGender').attr('hidden', true)
            $('#errorTos').attr('hidden', true)
            $('#errorSkills').attr('hidden', true)

            let valid = true;

            let firstName = $('#firstName').val();

            if(firstName === ''){
                $('#errorFirstName').removeAttr('hidden');
                valid = false;
            }

            let lastName = $('#lastName').val();
            if(lastName === '' || lastName === 'undefined'){
                $('#errorLastName').removeAttr('hidden');
                valid = false;
            }

            let email = $('#email').val();
            if(email === '' || email === 'undefined'){
                $('#errorEmail').removeAttr('hidden');
                valid = false;
            }

            let password = $('#password').val();
            if(password === '' || password === 'undefined'){
                $('#errorPassword').removeAttr('hidden');
                valid = false;
            }
            
            let checkboxMale = $('#male').is(':checked')
            let checkboxFemale = $('#female').is(':checked')

            if(checkboxMale === false && checkboxFemale === false){
                $('#errorGender').removeAttr('hidden')
                valid = false;
            }
            
            let checkConditions = $('#tos').is(':checked')
            if(checkConditions === false){
                $('#errorTos').removeAttr('hidden')
                valid = false;
            }

            let skills = $('#skills').val()
            if(skills == 'Choose...'){
                $('#errorSkills').removeAttr('hidden')
                valid = false;
            }
            if(!valid){
                e.preventDefault();
            }

        })


})















// //start the script only after the document was loaded on the page
// document.addEventListener('DOMContentLoaded', function(){  

//     //execute this function only when 
//     $('form').submit(function(e){
//         //hide every error message
//         $('#errorFirstName').attr('hidden', true);
//         //initialize the validator - true at the beginning
//         //becomes false when one rule is broken ( e.g. first name is not set)
//         let valid = true;
//         let firstName = $('#firstName').val();
//         if(firstName === '' || firstName ==='undefined'){
//             console.log('First name is empty or not set');
//             valid = false;
//             $('#errorFirstName').removeAttr('hidden');

//         }
//         let lastName = $('#lastName').val();
//         if(lastName === '' || lastName ==='undefined'){
//             console.log('Last name is empty or not set');
//         } 

//         e.preventDefault();
//     })
// })