// Ürünleri dinamik olarak listelemek
const products = [
    { name: "Klavye", price: 299, stock: 50 },
    { name: "Mouse", price: 199, stock: 120 },
    { name: "Ekran Kartı", price: 999, stock: 15 },
];

function displayProducts() {
    const productListDiv = document.getElementById('product-list');
    let html = `<table class="product-table">
                    <thead>
                        <tr>
                            <th>Ürün Adı</th>
                            <th>Fiyat</th>
                            <th>Stok</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    products.forEach((product, index) => {
        html += `<tr>
                    <td>${product.name}</td>
                    <td>${product.price}₺</td>
                    <td>${product.stock}</td>
                    <td>
                        <button class="edit-button" onclick="editProduct(${index})">Düzenle</button>
                        <button class="delete-button" onclick="deleteProduct(${index})">Sil</button>
                    </td>
                </tr>`;
    });

    html += `</tbody></table>`;
    productListDiv.innerHTML = html;
}

// Yeni ürün ekleme
function addProduct(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);

    products.push({ name, price, stock });
    displayProducts();
    closeAddProductForm();
}

// Ürün düzenleme (basit bir örnek)
function editProduct(index) {
    alert(`Ürün düzenlenecek: ${products[index].name}`);
}

// Ürün silme (basit bir örnek)
function deleteProduct(index) {
    if (confirm("Ürünü silmek istediğinizden emin misiniz?")) {
        products.splice(index, 1);
        displayProducts();
    }
}

// Ürün ekleme formunu açma
function openAddProductForm() {
    document.getElementById("addProductForm").style.display = "block";
}

// Ürün ekleme formunu kapatma
function closeAddProductForm() {
    document.getElementById("addProductForm").style.display = "none";
}

// Sayfa yüklendiğinde ürünleri listele
window.onload = displayProducts;
