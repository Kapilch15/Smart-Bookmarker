console.log("JS is running");

//GET DOM elements by selecting them
const urlInput = document.getElementById("urlInput");
const addBookMarkBtn = document.getElementById("addBookMark");
const deleteMarkBtn = document.getElementById("deleteAll");
const bookMarkList = document.getElementsByClassName("bookmarks-list")[0];

// function for validation
function isValidURL(url) {
  const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
  return pattern.test(url);
}

//Event Listener for adding bookmarks
addBookMarkBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  console.log(url);
  if (isValidURL(url)) {
    // Create a new list item and add the URL
    const bookmarkItem = document.createElement("li");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.innerHTML = `<a href="${url}" target="_blank">${url}</a>
    <div class="buttons">
    <button class="edit">Edit</button> 
    <button class="delete">Delete</button> 
    </div>`;
    bookMarkList.appendChild(bookmarkItem);
    urlInput.value = "";
    addEditBookMark(bookmarkItem);
    addDeleteBookmark(bookmarkItem);
  } else {
    alert("Invalid URL. Please enter a valid URL.");
  }
});

// Event listener for deleting all bookmarks

deleteMarkBtn.addEventListener("click", () => {
  while (bookMarkList.firstChild) {
    bookMarkList.removeChild(bookMarkList.firstChild);
  }
});

// Event listener for editing bookmarks
function addEditBookMark(bookmarkItem) {
  const editButton = bookmarkItem.querySelector(".edit");
  const bookmarkLink = bookmarkItem.querySelector("a");
  //listener
  editButton.addEventListener("click", () => {
    const newUrl = prompt("Enter new URL:");
    bookmarkLink.getAttribute("href");
    if (newUrl && isValidURL(newUrl)) {
      bookmarkLink.setAttribute("href", newUrl);
      bookmarkLink.innerHTML = newUrl;
    } else if (newUrl) {
      alert("Invalid URL. Please enter a valid URL. (http:// or https://");
    }
  });
}

//Function listener for deleting bookmarks
function addDeleteBookmark(bookmarkItem) {
  const deleteButton = bookmarkItem.querySelector(".delete");
  // listener
  deleteButton.addEventListener("click", () => {
    bookMarkList.removeChild(bookmarkItem);
  });
}
