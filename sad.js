// document.addEventListener('DOMContentLoaded', () => {
//     toggle_button = document.getElementById('toggle');

//     toggle_button.addEventListener('click', () => {
//         console.log('clicked!');
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {'task':'toggle'}, function(response) {

//             });
//         });
//     });
// });