function downloadPDF() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    var pdfPath = 'media/DheerajKumar_Kala_Resume.pdf';

    // Create an invisible link element
    var link = document.createElement('a');
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = 'Dheeraj_Kumar_Kala_CV.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
var currentIndex = 0;
    var totalSlides = document.querySelectorAll('.carousel-item').length;

    function showSlide(index) {
        var carouselWrapper = document.querySelector('.carousel-wrapper');
        var slideWidth = document.querySelector('.carousel-item').clientWidth;
        carouselWrapper.style.transform = 'translateX(' + -(slideWidth * index) + 'px)';
        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        showSlide(currentIndex);
    }