document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");
    const nums = document.querySelectorAll(".number");

    function resetAccordionItems() {
        document.querySelectorAll(".accordion-item").forEach(item => {
            item.style.backgroundColor = '';
            item.querySelector(".accordion-header").style.display = 'block';
            item.querySelector(".accordion-content").style.display = 'none';
        });
    }

    function setActiveAccordion(item, header, content) {
        item.style.backgroundColor = '#183D3D';
        header.style.display = 'none';
        content.style.display = 'block';
        nums.forEach(num => num.style.color = 'grey');
    }

    const firstItem = headers[0].parentElement;
    const firstHeader = headers[0];
    const firstContent = firstHeader.nextElementSibling;
    setActiveAccordion(firstItem, firstHeader, firstContent);

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;

            const isActive = content.style.display === "block";

            resetAccordionItems();

            if (!isActive) {
                setActiveAccordion(item, header, content);
            } else {
                nums.forEach(num => num.style.color = '');
            }
        });
    });
});
