export default function Traduction() {
    return (
        <Container>
            <div id="google_translate_element"></div>
            <script type="text/javascript"
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
            <cript type="text/javascript">
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({pageLanguage: 'en'},
                }
                </script>
</Container>
    );
}