
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './styles.css'
function BackToTop() {
    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <div className="back-to-top" id='myBtn' onClick={topFunction}>
        <ArrowUpwardRoundedIcon />
    </div>
  )
}

export default BackToTop