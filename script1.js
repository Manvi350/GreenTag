const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const resultDiv = document.getElementById('result');

uploadBox.addEventListener('click', () => fileInput.click());

function showResult() {
uploadBox.style.display = 'none';
resultDiv.style.display = 'block';
}

const products = {
    "shampoo.jpeg": {
        score: "4/5",
        feedback: "This shampoo is eco-friendly!",
        reasons: [
        "✅ Recyclable bottle",
        "✅ Vegan ingredients",
        "❌ Contains microplastics"
        ]
    },
    "tshirt.jpg": {
        score: "3/5",
        feedback: "Average sustainability.",
        reasons: [
        "✅ Organic cotton",
        "❌ Made in a high-pollution factory",
        "❌ Non-biodegradable packaging"
        ]
    },
    "apple.jpg": {
        score: "4/5",
        feedback: "Good sustainability rating.",
        reasons: [
        "✅ Locally sourced",
        "✅ Grown without pesticides",
        "❌ Plastic wrapping used"
        ]   
    }
};

fileInput.addEventListener('change', (e) => {
if (e.target.files.length > 0) {
    const fileName = e.target.files[0].name.toLowerCase();
    uploadBox.innerHTML = '<p>🔍 Analyzing sustainability...</p>';
    uploadBox.style.color="black";
    
    setTimeout(() => {
    const product = products[fileName] || {
        score: "3/5",
        feedback: "Standard product.",
        reasons: [
        "✅ No animal testing",
        "❌ No sustainability data available"
        ]
    };
    document.getElementById('score').textContent = product.score;
    document.getElementById('feedback').textContent = product.feedback;
    document.getElementById('reasons').innerHTML = product.reasons.map(r => `<li>${r}</li>`).join('');
    showResult();
    }, 1500);
}
});

if(document.getElementById('uploadBox')){
    function resetScanner() {
        uploadBox.style.display = 'block';
        uploadBox.innerHTML = '<p>📷 Click to upload an image</p>';
        resultDiv.style.display = 'none';
        fileInput.value = '';
    } 
}
