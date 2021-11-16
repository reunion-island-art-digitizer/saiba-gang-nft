export default function Traduction() {
    return (
           <div id="google_translate_element"></div>

<script>
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    //here is where you change the language
    pageLanguage: 'en'
  }, 'google_translate_element');
}
</script>

<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    );
}