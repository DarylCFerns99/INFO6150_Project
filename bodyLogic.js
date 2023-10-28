document.addEventListener('DOMContentLoaded', function() {
    var checkBox = document.getElementById('toggleSections');
    document.getElementById('toggleSections').addEventListener('change', function() {
        var mapSection = document.getElementById('mapSection');
        var cardSection = document.getElementById('cardSection');
        
        if (this.checked) {
            mapSection.style.display = 'block';
            cardSection.style.display = 'none';
        } else {
            mapSection.style.display = 'none';
            cardSection.style.display = 'block';
        }
    });
});

const openDescription = (_event) => window.location.href='./description.html'