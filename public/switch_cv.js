const bCV_app = document.getElementById('bCV_app');
const bCV_web = document.getElementById('bCV_web');
// const bCV_gd = document.getElementById('bCV_gd');

const pdf_app = document.getElementById('pdf_app');
const pdf_web = document.getElementById('pdf_web');
// const pdf_gd = document.getElementById('pdf_gd');

bCV_app.onclick = (e) => {
    pdf_app.hidden = false;
    // pdf_gd.hidden = true;
    pdf_web.hidden = true;
}
bCV_web.onclick = (e) => {
    pdf_web.hidden = false;
    pdf_app.hidden = true;
    // pdf_gd.hidden = true;
}
// bCV_gd.onclick = (e) => {
//     pdf_gd.hidden = false;
//     pdf_app.hidden = true;
//     pdf_web.hidden = true;
// }